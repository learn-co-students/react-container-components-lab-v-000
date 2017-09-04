// Code MovieReviews Here
import React from 'react';

const MovieReview = ({ display_title, byline, summary_short }) => {
  return(
    <div  className="review" >
      <p>{display_title}</p>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
}
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


const MovieReviews = (props) =>{
    return (
      <div className="review-list">
      {props.reviews.map((movieReview, index) =>
        <div className="review" key={index}>
          <p>{movieReview.display_title}</p>
          <p>{movieReview.byline}</p>
          <p>{movieReview.summary_short}</p>
        </div>
      )}
      </div>
    );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;

// <MovieReview
// display_title={movieReview.display_title}
// byline={movieReview.byline}
// summary_short={movieReview.summary_short}
// />





// <MovieReviewList movieReviews={reviews} />
