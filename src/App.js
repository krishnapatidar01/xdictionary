import React, { useState } from "react";
import "./App.css";

const dictionary = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]
;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");
  const [showDefinition, setShowDefinition] = useState(false);

  const handleSearch = () => {
    const word = searchTerm.trim().toLowerCase();
    const found = dictionary.find((entry) => entry.word.toLowerCase() === word);

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }

    setShowDefinition(true);
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

      {showDefinition && (
        <div>
          <h3>Definition:</h3>
          <p>{definition}</p>
        </div>
      )}
    </div>
  );
}

export default App;
