import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople } from "./swapiActions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const isValidUrl = (url) =>
  /^https:\/\/swapi\.py4e\.com\/api\/people\/\d+\/?$/.test(url);

const highlightJSON = (json) =>
  json
    .replace(/(".*?"):/g, '<span class="json-key">$1</span>:')
    .replace(/: (".*?")/g, ': <span class="json-string">$1</span>')
    .replace(/: (\d+)/g, ': <span class="json-number">$1</span>');

const App = () => {
  const dispatch = useDispatch();
  const { loading, person } = useSelector((s) => s.swapi);

  const [url, setUrl] = useState("https://swapi.py4e.com/api/people/1/");
  const [error, setError] = useState("");

  const handleFetch = () => {
    if (!isValidUrl(url)) {
      setError("Invalid URL. Example: /people/1/");
      return;
    }
    setError("");
    dispatch(fetchPeople(url));
  };

  return (
    <div className="app">
      <div className="swapi-container">
        <Header />

        <div className="toolbar">
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
          <button onClick={handleFetch}>Get info</button>
        </div>

        <div className="main">
          {error && <p className="error">{error}</p>}
          {loading && <p>Loading...</p>}
          {person && (
            <pre
              className="json-box"
              dangerouslySetInnerHTML={{
                __html: highlightJSON(JSON.stringify(person, null, 2)),
              }}
            />
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;
