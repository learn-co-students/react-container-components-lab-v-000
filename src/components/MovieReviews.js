import React from 'react';

const Review = ({ display_title, mpaa_rating, multimedia }) => {
  return (
    <div key={display_title} className="review">
      <img src={String.toString(multimedia.src)} />
      <h3>{display_title}</h3>
      <p>Rated: {mpaa_rating}</p>
    </div >
  );

}

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(Review)}
    </div>
  )
}

//map was failing on some reviews
MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
