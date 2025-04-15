import React, { useState } from 'react';
import "./biblicalhistory.css"

const BiblicalHistory = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="textual-history-container">
      <h2 style={{color:"black"}}> The Masoretic Text (MT) and Its Development</h2>
      <p>
        The <strong>Masoretic Text</strong> (MT) is the authoritative Hebrew Bible used in Judaism today.
        It is a standardized version developed by Jewish scribes known as the <strong>Masoretes</strong> between the 7th and 10th centuries CE.
      </p>
<br></br>
      <h3>Origins and Development</h3>
      <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Proto-Masoretic Text</td>
            <td>
              Originated during the Second Temple period (6th century BCE–70 CE). Fragments in the Dead Sea Scrolls resemble later MT.
              Variations existed due to oral and regional transmission.
            </td>
          </tr>
          <tr>
            <td>Masoretic Standardization</td>
            <td>
              Masoretes in Tiberias added:
              <ul>
                <li>Vowel points (Niqqud)</li>
                <li>Cantillation marks</li>
                <li>Marginal notes (Masorah)</li>
              </ul>
              Ensured pronunciation, consistency, and minimized errors.
            </td>
          </tr>
          <tr>
            <td>Canonical Status</td>
            <td>
              Achieved by the 10th century CE. The <strong>Leningrad Codex</strong> (1008 CE) is the oldest complete MT manuscript.
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Limitations</h3>
      <div>
        <p>MT is not the original manuscript, but a preserved medieval standard.</p>
        <p>Dead Sea Scrolls show textual fluidity with spelling and content variations.</p>
      </div>
      <br></br>
      <br></br>

      <h2 style={{color:"black"}}>Other Manuscripts Used for NRSV Translation</h2>

      <h3>Dead Sea Scrolls (DSS)</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Discovery</td>
            <td>Found 1947–1956 near Qumran. Dated 3rd century BCE–1st century CE. Includes biblical and sectarian texts.</td>
          </tr>
          <tr>
            <td>Significance</td>
            <td>Confirms textual stability but reveals alternative readings (e.g., Jeremiah). Highlights early diversity.</td>
          </tr>
          <tr>
            <td>Release</td>
            <td>Initially restricted. Wider access granted by 1991 via Huntington Library and others.</td>
          </tr>
        </tbody>
      </table>

      <h3>Septuagint (LXX)</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Origins</td>
            <td>Greek translation from ~280 BCE in Alexandria. Reflects pre-Masoretic traditions. Includes apocryphal books.</td>
          </tr>
          <tr>
            <td>Significance</td>
            <td>Used by early Christians. Differences from MT show textual evolution.</td>
          </tr>
        </tbody>
      </table>

      <h3>Samaritan Pentateuch</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Origins</td>
            <td>Preserved by Samaritans. Contains unique spelling, grammar, and theology.</td>
          </tr>
          <tr>
            <td>Significance</td>
            <td>Provides comparative data despite limited influence.</td>
          </tr>
        </tbody>
      </table>

      <h3>New Testament Manuscripts</h3>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Earliest Copies</td>
            <td>Written in Greek (~1st century CE). Papyrus 52 (~125 CE) is oldest fragment.</td>
          </tr>
          <tr>
            <td>Evidence</td>
            <td>Over 25,000 manuscripts including uncials and minuscules.</td>
          </tr>
          <tr>
            <td>Textual Criticism</td>
            <td>Variants compared to reconstruct original readings. Uncertainties acknowledged.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{color:"black"}}>Conclusion</h2>
      <p>
        The MT is a standardized medieval text with ancient roots. Other manuscripts like the DSS and LXX offer crucial insights.
        Scholarly reconstructions rely on comparative analysis due to the lack of original autographs.
      </p>

      <div className="citations">
  <h3>📚 Full Citations</h3>
  <ul>
    <li>
      <a href="https://en.wikipedia.org/wiki/Masoretic_Text" target="_blank" rel="noopener noreferrer">
        [1] Masoretic Text – Wikipedia
      </a>
    </li>
    <li>
      <a href="https://academic.tyndalehouse.com/explore/articles/the-masoretic-text/" target="_blank" rel="noopener noreferrer">
        [2] The Masoretic Text – Tyndale House Academic Article
      </a>
    </li>
    <li>
      <a href="https://translation.bible/wp-content/uploads/2024/07/sipila-2016-the-canonization-process-of-the-masoretic-text.pdf" target="_blank" rel="noopener noreferrer">
        [3] Sipilä, Jarmo (2016). The Canonization Process of the Masoretic Text
      </a>
    </li>
    <li>
      <a href="https://www.sots.ac.uk/wiki/masoretic-text/" target="_blank" rel="noopener noreferrer">
        [4] Society for Old Testament Study – Masoretic Text Entry
      </a>
    </li>
    <li>
      <a href="https://www.scriptureanalysis.com/the-masoretic-text-understanding-biblical-origins/" target="_blank" rel="noopener noreferrer">
        [5] ScriptureAnalysis.com – Understanding Biblical Origins
      </a>
    </li>
    <li>
      <a href="https://bogoslovlje.pbf.rs/wp-content/uploads/2024/08/02-I-2017.pdf" target="_blank" rel="noopener noreferrer">
        [6] Bogoslovlje Journal (2017) – Masoretic, DSS, and LXX Overview
      </a>
    </li>
    <li>
      <a href="https://www.bible.ca/manuscripts/Masoretic-Text-MT-Leningrad-Codex-Bible-manuscripts-Old-Testament-Torah-Tanakh-Hebrew-Rabbi-Yose-ben-Halafta-Zippori-160AD.htm" target="_blank" rel="noopener noreferrer">
        [7] Bible.ca – History of the MT and Leningrad Codex
      </a>
    </li>
    <li>
      <a href="https://journals.sagepub.com/doi/10.1177/2051677016650016?icid=int.sj-full-text.similar-articles.7" target="_blank" rel="noopener noreferrer">
        [8] SAGE Journals – Masoretic Variants Analysis
      </a>
    </li>
  </ul>
</div>

    </div>
  );
  

};

export default BiblicalHistory;
