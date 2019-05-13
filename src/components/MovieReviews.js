import React from "react";

const Review = ({ byline, headline, link, summary_short }) => (
  <div className="review" key={link.url}>
    <header>
      <a className="review-link" href={link.url}>
        {headline}
      </a>
      <br />
      <span className="author">{byline}</span>
    </header>
    <p>{summary_short}</p>
  </div>
);

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

export default MovieReviews;
