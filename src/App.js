import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setResult({ found: true, meaning: found.meaning });
    } else {
      setResult({ found: false });
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Enter word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {result && (
        result.found ? (
          <>
            <h3>Definition:</h3>
            <p>{result.meaning}</p>
          </>
        ) : (
          <p>Word not found in the dictionary.</p>
        )
      )}
    </div>
  );
}

export default App;
