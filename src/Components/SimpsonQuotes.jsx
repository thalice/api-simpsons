import React from "react";

function SimpsonQuotes({ quotes }) {
  return (
    <div className="SimpsonQuotes">
      <img src={quotes.image} alt={quotes.character} />
      <ul>
        <li>Character: {quotes.character}</li>
        <li>Quote: {quotes.quote}</li>
      </ul>
    </div>
  );
}

export default SimpsonQuotes;
