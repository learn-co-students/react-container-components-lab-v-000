// Code MovieReviews Here
import React from 'react';

const MovieReview = ({ display_title, byline, summary_short }) => {
  return(
    <div key={display_title}>
      <p>{display_title}</p>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
}
const MovieReviewList = ({movieReviews}) => {
  return (
    <div>
      {movieReviews.map(movieReview =>
        <div className="review" key={movieReview.display_title}>
          <MovieReview
            display_title={movieReview.display_title}
            byline={movieReview.byline}
            summary_short={movieReview.summary_short}
          />
        </div>
      )}
    </div>
  );
}


const MovieReviews = ({reviews}) =>{
    return (
      <div className="review-list">
        <MovieReviewList movieReviews={reviews} />
      </div>
    );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
