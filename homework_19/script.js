"use strict";

const API_KEY = "c781a39dddf622cd96c2a30ab565e5fc";
const UNITS = "metric"; // metric -> °C, imperial -> °F

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const refresh = document.getElementById("refresh");
const dateEl = document.getElementById("date");
const locationEl = document.getElementById("location");
const timeEl = document.getElementById("time");
const ampmEl = document.getElementById("ampm");
const statsEl = document.getElementById("stats");
const tempEl = document.getElementById("temp");
const feelsEl = document.getElementById("feels");
const updatedEl = document.getElementById("updated");
const iconImg = document.getElementById("iconImg");

function saveCache(city, data) {
  try {
    localStorage.setItem(
      "weather_cache_" + city.toLowerCase(),
      JSON.stringify(data)
    );
  } catch (error) {}
}
function loadCache(city) {
  try {
    const data = localStorage.getItem("weather_cache_" + city.toLowerCase());
    return data ? JSON.parse(data) : null;
  } catch (error) {
    return null;
  }
}

//Formatting local city time by timezone field
function formatLocal(dtSec, tzOffsetSec) {
  const utcMs = dtSec * 1000;
  const localMs = utcMs + tzOffsetSec * 1000;
  const d = new Date(localMs);
  const dateStr = d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const timeStr = d.toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const parts = timeStr.split(" ");
  return { dateStr, timePart: parts[0], ampm: parts[1] || "" };
}

function degToCardinal(deg) {
  if (deg == null) return "";
  const dirs = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const ix = Math.round(deg / 22.5) % 16;
  return dirs[ix];
}

function msToKmH(ms) {
  return Math.round(ms * 3.6);
}

function render(data, fromCache = false) {
  const cityName =
    (data.name || "--") +
    (data.sys && data.sys.country ? ", " + data.sys.country : "");
  const tz = data.timezone || 0;
  const dt = data.dt || Math.floor(Date.now() / 1000);
  const f = formatLocal(dt, tz);

  dateEl.textContent = f.dateStr;
  locationEl.textContent = `${cityName}`;

  timeEl.textContent = f.timePart;
  ampmEl.textContent = f.ampm;

  const t =
    data.main && data.main.temp != null
      ? Math.round(data.main.temp) + "°C"
      : "--";
  tempEl.textContent = t;

  const feels =
    data.main && data.main.feels_like != null
      ? Math.round(data.main.feels_like) + "°C"
      : "--";
  const descr =
    data.weather && data.weather[0] ? capitalize(data.weather[0].main) : "";
  feelsEl.innerHTML = `Feels like: ${feels}<br><strong>${descr}</strong>`;

  const humidity =
    data.main && data.main.humidity != null ? data.main.humidity + "%" : "--";
  const pressure =
    data.main && data.main.pressure != null
      ? data.main.pressure + " hPa"
      : "--";
  const windSpeed =
    data.wind && data.wind.speed != null
      ? msToKmH(data.wind.speed) + " km/h"
      : "--";
  const windDir =
    data.wind && data.wind.deg != null ? degToCardinal(data.wind.deg) : "";
  statsEl.innerHTML = `Humidity: ${humidity}<br>Pressure: ${pressure}<br>Wind: ${windSpeed} ${windDir}`;

  if (data.weather && data.weather[0] && data.weather[0].icon) {
    const icon = data.weather[0].icon;
    iconImg.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    iconImg.alt = data.weather[0].description || "weather";
    iconImg.style.display = "";
  } else {
    iconImg.style.display = "none";
  }

  const now = new Date();
  updatedEl.textContent = `Last update: ${now.toLocaleString("uk-UA")} ${
    fromCache ? "(cached)" : ""
  }`;
}

function capitalize(word) {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

async function fetchWeather(city) {
  searchBtn.disabled = true;
  refresh.disabled = true;
  searchBtn.textContent = "Loading...";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&units=${UNITS}&appid=${API_KEY}`;
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error("HTTP " + resp.status);
    const data = await resp.json();
    saveCache(city, data);
    render(data, false);
  } catch (error) {
    console.error("Fetch error", error);
    const cached = loadCache(city);
    if (cached) {
      render(cached, true);
      alert("Loading error — cached data shown.");
    } else {
      alert("Failed to load data. Check network or API key.");
    }
  } finally {
    searchBtn.disabled = false;
    refresh.disabled = false;
    searchBtn.textContent = "Search";
  }
}

// Events
searchBtn.addEventListener("click", () => {
  const city = (cityInput.value || "").trim();
  if (!city) return alert("Enter city");
  fetchWeather(city);
});
refresh.addEventListener("click", () => searchBtn.click());
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});

(function init() {
  const city = (cityInput.value || "Kyiv").trim();
  const cached = loadCache(city);
  if (cached) render(cached, true);

  fetchWeather(city);
})();
