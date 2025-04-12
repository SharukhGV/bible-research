import React, { useState, useEffect, useRef } from 'react';
import NRSVbible from "./NRSVbible.json";
import "./bible.css";

function BibleNRSV() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [selectedBook, setSelectedBook] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedVerse, setSelectedVerse] = useState('');
  const [books, setBooks] = useState(Object.keys(NRSVbible));
  const [chapters, setChapters] = useState([]);
  const [verses, setVerses] = useState([]);
  const [searchType, setSearchType] = useState('mixed');

  const bookRefs = useRef({});
  const verseRefs = useRef({});
  const containerRef = useRef();

  useEffect(() => {
    if (selectedBook) {
      setChapters(Object.keys(NRSVbible[selectedBook]));
      setSelectedChapter('');
      setVerses([]);
    }
  }, [selectedBook]);

  useEffect(() => {
    if (selectedBook && selectedChapter) {
      setVerses(Object.keys(NRSVbible[selectedBook][selectedChapter]));
      setSelectedVerse('');
    }
  }, [selectedChapter, selectedBook]);

  const scrollToVerse = (verseKey) => {
    const verseElement = verseRefs.current[verseKey];
    if (verseElement) {
      const topOffset = verseElement.offsetTop - 180; // Adjusted for fixed headers
      containerRef.current.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      
      verseElement.style.backgroundColor = '#fff3cd';
      setTimeout(() => {
        verseElement.style.backgroundColor = 'transparent';
      }, 2000);
    }
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return setSearchResults(null);

    const results = [];
    const normalizedTerm = searchTerm.toLowerCase().trim();

    for (const book in NRSVbible) {
      for (const chapter in NRSVbible[book]) {
        for (const verse in NRSVbible[book][chapter]) {
          const verseText = NRSVbible[book][chapter][verse].toLowerCase();

          if (
            (searchType === 'exact' && verseText.includes(normalizedTerm)) ||
            (searchType === 'mixed' && normalizedTerm.split(' ').every(word => verseText.includes(word)))
          ) {
            results.push({ book, chapter, verse, text: NRSVbible[book][chapter][verse] });
          }
        }
      }
    }

    setSearchResults(results);
  };

  const handleNavigation = () => {
    if (selectedBook && selectedChapter && selectedVerse) {
      scrollToVerse(`${selectedBook}-${selectedChapter}-${selectedVerse}`);
    }
  };

  return (
    <div className="bible-container">
      {/* Fixed Header Section */}
      <div className="fixed-header">
        <div className="search-controls">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search verses"
            className="search-input"
          />
          <div className="search-type">
            <label>
              <input 
                type="radio" 
                checked={searchType === 'mixed'} 
                onChange={() => setSearchType('mixed')} 
              /> Mixed Words
            </label>
            <label>
              <input 
                type="radio" 
                checked={searchType === 'exact'} 
                onChange={() => setSearchType('exact')} 
              /> Exact Phrase
            </label>
          </div>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>

        <div className="navigation-controls">
          <select 
            value={selectedBook} 
            onChange={(e) => setSelectedBook(e.target.value)}
            className="book-select"
          >
            <option value="">Select Book</option>
            {books.map(book => <option key={book}>{book}</option>)}
          </select>

          {selectedBook && (
            <select 
              value={selectedChapter} 
              onChange={(e) => setSelectedChapter(e.target.value)}
              className="chapter-select"
            >
              <option value="">Select Chapter</option>
              {chapters.map(ch => <option key={ch}>{ch}</option>)}
            </select>
          )}

          {selectedChapter && (
            <select 
              value={selectedVerse} 
              onChange={(e) => setSelectedVerse(e.target.value)}
              className="verse-select"
            >
              <option value="">Select Verse</option>
              {verses.map(v => <option key={v}>{v}</option>)}
            </select>
          )}

          <button onClick={handleNavigation} className="go-button">Go</button>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div ref={containerRef} className="content-container">
        <div className="content-wrapper">
          {searchResults ? (
            searchResults.map((res, i) => (
              <div 
                key={i} 
                ref={(el) => verseRefs.current[`${res.book}-${res.chapter}-${res.verse}`] = el}
                className="verse-result"
              >
                <strong>{res.book} {res.chapter}:{res.verse}</strong> - {res.text}
              </div>
            ))
          ) : (
            books.map(book => (
              <div key={book} ref={el => bookRefs.current[book] = el} className="book-section">
                <h2 className="book-title">{book}</h2>
                {Object.entries(NRSVbible[book]).map(([ch, vs]) => (
                  <div key={ch} className="chapter-section">
                    <h3 className="chapter-title">Chapter {ch}</h3>
                    {Object.entries(vs).map(([v, text]) => (
                      <div 
                        key={v} 
                        ref={(el) => verseRefs.current[`${book}-${ch}-${v}`] = el}
                        className="verse-text"
                      >
                        <span className="verse-number">{v}:</span> {text}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BibleNRSV;
