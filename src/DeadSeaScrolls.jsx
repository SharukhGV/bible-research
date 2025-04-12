import React, { useState } from 'react';
import scrollsData from "./scrollsData.json"


const DeadSeaScrolls = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const normalize = str =>
    str.replace(/[.,:"'׳״!?]/g, "").toLowerCase().trim();

  const isMatch = (text, term) => {
    if (!term) return true;
    const cleanTerm = normalize(term);
    const cleanText = normalize(text);

    // Exact phrase in quotes
    if (term.startsWith('"') && term.endsWith('"')) {
      const phrase = normalize(term.slice(1, -1));
      return cleanText.includes(phrase);
    }

    // General keyword search
    return cleanTerm
      .split(" ")
      .every(word => cleanText.includes(word));
  };

  const filteredScrolls = scrollsData.map(scroll => ({
    ...scroll,
    verses: scroll.verses.filter(
      ([ref, hebrew]) =>
        isMatch(ref, searchTerm) || isMatch(hebrew, searchTerm)
    )
  })).filter(scroll => scroll.verses.length > 0);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2>🕎 Dead Sea Scroll Viewer</h2>
      <input
        type="text"
        placeholder='Search verses (e.g., "זרעכמ ו אכלהו", Lev 26)'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px"
        }}
      />

      {filteredScrolls.length === 0 ? (
        <p>No matching verses found.</p>
      ) : (
        filteredScrolls.map(({ scroll, verses }) => (
          <div key={scroll} style={{ marginBottom: "2rem" }}>
            <h3>📜 Scroll: {scroll}</h3>
            <ul>
              {verses.map(([ref, hebrew], idx) => (
                <li key={idx} style={{ marginBottom: "10px" }}>
                  <strong>{ref}:</strong>
                  <div style={{ direction: "rtl", fontSize: "18px", marginTop: "4px" }}>
                    {hebrew}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default DeadSeaScrolls;
