import React from "react";

const Review = ({headline, summary, url}) => {
  return(
    <div className='review'>
      <h3><a href={url}>{headline}</a></h3>
      <p>{summary}</p>
    </div>
  );
}

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
      {reviews.map(review => <Review headline={review.headline} summary={review.summary_short} url={review.link.url} />)}
    </div>
)

MovieReviews.defaultProps = {
  'reviews': []
}

export default MovieReviews;
