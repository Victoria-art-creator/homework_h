const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  let isValid = true;
  const formData = new FormData(event.target);
  const formObj = {};

  const phoneRegex = /^\+380\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const name = formData.get("name").trim();
  const message = formData.get("message").trim();
  const phone = formData.get("phone").trim();
  const email = formData.get("e-mail").trim();

  function showError(inputName, message) {
    const input = form.querySelector(`[name="${inputName}"]`);
    const errorEl = document.createElement("div");
    errorEl.classList.add("error-message");
    errorEl.style.color = "red";
    errorEl.style.fontSize = "14px";
    errorEl.style.marginTop = "-10px";
    errorEl.style.marginBottom = "10px";
    errorEl.innerText = message;
    input.insertAdjacentElement("afterend", errorEl);
  }

  if (!name) {
    isValid = false;
    showError("name", "Name is required");
  }

  if (message.length < 5) {
    isValid = false;
    showError("message", "Message must be at least 5 characters");
  }

  if (!phoneRegex.test(phone)) {
    isValid = false;
    showError("phone", "Phone must start with +380 and have 9 digits after");
  }

  if (!isValid) return;

  formData.forEach((value, key) => (formObj[key] = value));

  console.log("Form submitted successfully:", formObj);

  form.reset();
});
