import React from 'react';
import MovieReview from './MovieReview'
const MovieReviewList = ({movieReviews}) => {
  return (
    <div>
      {movieReviews.map((movieReview, index) =>
        <div key={index}>
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

export default MovieReviewList;
