import React, { useState } from "react";
import "./App.css";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "Reusable pieces of UI in React." },
  { word: "State", meaning: "An object that determines how a component behaves and renders." },
  { word: "Props", meaning: "Inputs to components used for passing data." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const trimmed = searchTerm.trim();

    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setResult({ found: true, meaning: found.meaning });
    } else {
      setResult({ found: false });
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Enter word to search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {result && (
        <div className="result">
          {result.found ? (
            <>
              <h3>Definition:</h3>
              <p>{result.meaning}</p>
            </>
          ) : (
            <p>Word not found in the dictionary.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
