import React, { useState } from "react";
import "./App.css";

function App() {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

const handleSearch = () => {
  const trimmedTerm = searchTerm.trim();
  
  if (!trimmedTerm) {
    setResult(null);
    return;
  }

  const found = dictionary.find(
    (entry) => entry.word.toLowerCase() === trimmedTerm.toLowerCase()
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
        value={searchTerm}
        placeholder="Enter word to search"
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
