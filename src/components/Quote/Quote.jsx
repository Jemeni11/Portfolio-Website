import React from "react";
import "./quote.css";

const Quote = ({ citeLink, quote, author, work = undefined }) => {
  return (
    <div className="QuoteContainer">
      <figure>
        <blockquote cite={citeLink}>
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          —{author}
          {work && <cite>`, ${work}`</cite>}
        </figcaption>
      </figure>
    </div>
  );
};

export default Quote;
