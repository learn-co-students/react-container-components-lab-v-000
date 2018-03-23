import React from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
        <a
          className="review-link"

          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};



//make movie reviews

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)} </div>

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;