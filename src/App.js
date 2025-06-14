import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      setResult(found.meaning);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>

      {result && (
        <>
          <h3>Definition:</h3>
          <p>{result}</p>
        </>
      )}

      {notFound && <p>Word not found in the dictionary.</p>}
    </div>
  );
}

export default App;
