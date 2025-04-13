import React, { useState } from "react";

// Your imports (as you provided above)
// import iAdamAndEve from './books/1-adam-and-eve.json';
// import iBaruch from './books/1-baruch.json';
import iEnoch from './books/1-enoch.json';
// import iEsdras from './books/1-esdras.json';
// import iHermas from './books/1-hermas.json';
// import iMaccabees from './books/1-maccabees.json';
// import iiAdamAndEve from './books/2-adam-and-eve.json';
// import iiBaruch from './books/2-baruch.json';
// import iiEnoch from './books/2-enoch.json';
// import iiEsdras from './books/2-esdras.json';
// import iiHermas from './books/2-hermas.json';
// import iiMaccabees from './books/2-maccabees.json';
// import iiiBaruch from './books/3-baruch.json';
// import iiiEnoch from './books/3-enoch.json';
// import iiiHermas from './books/3-hermas.json';
// import ivBaruch from './books/4-baruch.json';
// import apocalypseOfElijah from './books/apocalypse-of-elijah.json';
// import apocalypseOfPeter from './books/apocalypse-of-peter.json';
// import apocalypseOfSedrach from './books/apocalypse-of-sedrach.json';
// import apocryphonOfJoshua from './books/apocryphon-of-joshua.json';
// import ascensionOfIsaiah from './books/ascension-of-isaiah.json';
// import testamentOfMoses from './books/assumption-of-moses.json';
// import prayerOfAzariah from './books/azar.json';
// import balaamInscription from './books/balaam-inscription.json';
import belAndTheDragon from './books/bel-and-the-dragon.json';
import bookOfGiants from './books/book-of-giants.json';
// import jasher from './books/book-of-jasher.json';
import jubilees from './books/book-of-jubilees.json';
// import judith from './books/book-of-judith.json';
// import bookOfNathanTheProphet from './books/book-of-nathan-the-prophet.json';
import sirach from './books/book-of-sirach.json';
import tobit from './books/book-of-tobit.json';
// import generalEpistleOfBarnabas from './books/epistle-of-barnabas.json';
import fivePsalmsOfDavid from './books/five-psalms-of-david.json';
// import gadTheSeer from './books/gad-the-seer.json';
import genesisApocryphon from './books/genesis-apocryphon.json';
// import gospelOfNicodemus from './books/gospel-of-nicodemus.json';
// import additionsToEsther from './books/greek-esther.json';
// import historyOfTheRechabites from './books/history-of-the-rechabites.json';
// import jannesAndJambres from './books/jannes-and-jambres.json';
// import josephAndAsenath from './books/joseph-and-asenath.json';
// import ladderOfJacob from './books/ladder-of-jacob.json';
// import livesOfTheProphets from './books/lives-of-the-prophets.json';
// import odesOfSolomon from './books/odes-of-solomon.json';
// import prayerOfManasseh from './books/prayer-of-manasseh.json';
import psalmsOfSolomon from './books/psalms-of-solomon.json';
import songsOfTheSabbathSacrifice from './books/songs-of-the-sabbath-sacrifice.json';
import susanna from './books/susanna.json';
// import testamentOfAbraham from './books/testament-of-abraham.json';
// import testamentOfAsher from './books/testament-of-asher.json';
// import testamentOfBenjamin from './books/testament-of-benjamin.json';
// import testamentOfDan from './books/testament-of-dan.json';
// import testamentOfGad from './books/testament-of-gad.json';
// import testamentOfIsaac from './books/testament-of-isaac.json';
// import testamentOfIssachar from './books/testament-of-issachar.json';
// import testamentOfJacob from './books/testament-of-jacob.json';
// import testamentOfJob from './books/testament-of-job.json';
// import testamentOfJoseph from './books/testament-of-joseph.json';
// import testamentOfJudah from './books/testament-of-judah.json';
// import testamentOfKohath from './books/testament-of-kohath.json';
import testamentOfLevi from './books/testament-of-levi.json';
import testamentOfNaphtali from './books/testament-of-naphtali.json';
// import testamentOfReuben from './books/testament-of-reuben.json';
// import testamentOfSimeon from './books/testament-of-simeon.json';
// import testamentOfSolomon from './books/testament-of-solomon.json';
// import testamentOfZebulun from './books/testament-of-zebulun.json';
import visionsOfAmram from './books/visions-of-amram.json';
import wisdomOfAhikar from './books/wisdom-of-ahikar.json';
// import wisdomOfSolomon from './books/wisdom-of-solomon.json';

import "./deadseascrolls.css"
// Map file name to content
const bookFilenames = {
  // "1-adam-and-eve": iAdamAndEve,
  // "1-baruch": iBaruch,
  "1-enoch": iEnoch,
  // "1-esdras": iEsdras,
  // "1-hermas": iHermas,
  // "1-maccabees": iMaccabees,
  // "2-adam-and-eve": iiAdamAndEve,
  // "2-baruch": iiBaruch,
  // "2-enoch": iiEnoch,
  // "2-esdras": iiEsdras,
  // "2-hermas": iiHermas,
  // "2-maccabees": iiMaccabees,
  // "3-baruch": iiiBaruch,
  // "3-hermas": iiiHermiiiHermasas,
  // "4-baruch": ivBaruch,
  // "apocalypse-of-elijah": apocalypseOfElijah,
  // "apocalypse-of-peter": apocalypseOfPeter,
  // "apocalypse-of-sedrach": apocalypseOfSedrach,
  // "apocryphon-of-joshua": apocryphonOfJoshua,
  // "ascension-of-isaiah": ascensionOfIsaiah,
  // "testament-of-moses": testamentOfMoses,
  // "prayer-of-azariah": prayerOfAzariah,
  // "balaam-inscription": balaamInscription,
  "bel-and-the-dragon": belAndTheDragon,
  "book-of-giants": bookOfGiants,
  // "jasher": jasher,
  "jubilees": jubilees,
  // "judith": judith,
  // "book-of-nathan-the-prophet": bookOfNathanTheProphet,
  "sirach": sirach,
  "tobit": tobit,
  // "general-epistle-of-barnabas": generalEpistleOfBarnabas,
  "five-psalms-of-david": fivePsalmsOfDavid,
  // "gad-the-seer": gadTheSeer,
  "genesis-apocryphon": genesisApocryphon,
  // "gospel-of-nicodemus": gospelOfNicodemus,
  // "additions-to-esther": additionsToEsther,
  // "history-of-the-rechabites": historyOfTheRechabites,
  // "jannes-and-jambres": jannesAndJambres,
  // "joseph-and-asenath": josephAndAsenath,
  // "ladder-of-jacob": ladderOfJacob,
  // "lives-of-the-prophets": livesOfTheProphets,
  // "odes-of-solomon": odesOfSolomon,
  // "prayer-of-manasseh": prayerOfManasseh,
  // "psalms-of-solomon": psalmsOfSolomon,
  "songs-of-the-sabbath-sacrifice": songsOfTheSabbathSacrifice,
  // "susanna": susanna,
  // "testament-of-abraham": testamentOfAbraham,
  // "testament-of-asher": testamentOfAsher,
  // "testament-of-benjamin": testamentOfBenjamin,
  // "testament-of-dan": testamentOfDan,
  // "testament-of-gad": testamentOfGad,
  // "testament-of-isaac": testamentOfIsaac,
  // "testament-of-issachar": testamentOfIssachar,
  // "testament-of-jacob": testamentOfJacob,
  // "testament-of-job": testamentOfJob,
  // "testament-of-joseph": testamentOfJoseph,
  // "testament-of-judah": testamentOfJudah,
  // "testament-of-kohath": testamentOfKohath,
  // "testament-of-levi": testamentOfLevi,
  // "testament-of-naphtali": testamentOfNaphtali,
  // "testament-of-reuben": testamentOfReuben,
  // "testament-of-simeon": testamentOfSimeon,
  // "testament-of-solomon": testamentOfSolomon,
  // "testament-of-zebulun": testamentOfZebulun,
  "visions-of-amram": visionsOfAmram,
  "wisdom-of-ahikar": wisdomOfAhikar,
  // "wisdom-of-solomon": wisdomOfSolomon
};

export default function DeadSeaScrolls() {
  const [selectedBook, setSelectedBook] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const currentBook = selectedBook ? bookFilenames[selectedBook] : null;

  const filteredVerses = currentBook
    ? currentBook.books.flatMap((b) =>
        b.chapters.flatMap((ch) =>
          ch.verses.filter((v) =>
            v.text.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      )
    : [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📜 Dead Sea Scrolls Explorer</h1>
      <div>
        <label>Select a Book: </label>
        <select
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
        >
          <option value="">-- Choose a scroll --</option>
          {Object.keys(bookFilenames).map((filename) => (
            <option key={filename} value={filename}>
              {filename.replace(/-/g, " ").replace(/\.json$/, "")}
            </option>
          ))}
        </select>
      </div>

      {currentBook && (
        <>
          <div style={{ margin: "1rem 0" }}>
            <input
              type="text"
              placeholder="Search text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>

          <div>
            {filteredVerses.map((verse, idx) => (
              <div key={idx} style={{ marginBottom: "1rem" }}>
                <strong>{verse.name}</strong>
                <p>{verse.text}</p>
              </div>
            ))}
            {filteredVerses.length === 0 && (
              <p>No matching verses found for "{searchTerm}"</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
