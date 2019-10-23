import React from 'react';

const makeReviews = (reviews) => {
  return reviews.map(({headline, byline, display_title, mpaa_rating, opening_date, summary_short, link}, index) => {
    return (
      <div key={index} className="review">
        <h1>{headline}</h1>
      </div>
    );
  });
};

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>{makeReviews(reviews)}</div>
  );
};

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
