import React, { useState } from "react";

const dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const entry = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (entry) {
      setDefinition(entry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
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

      {definition === "Word not found in the dictionary." ? (
        <p>{definition}</p>
      ) : (
        definition && (
          <>
            <h3>Definition:</h3>
            <p>{definition}</p>
          </>
        )
      )}
    </div>
  );
}

export default App;
