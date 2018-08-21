import React from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(Review)}
    </div>
  )
}

const Review = (review) => {
  return(
    <div className="review" key={review.headline}>
      <h3>Title: {review.display_title}</h3><br/>
      <a href={review.link.url}>{review.headline}</a><br/>
      <p>Author: {review.byline}</p><br/>
      <p>{review.summary_short}</p>
    </div>
  );
}

export default MovieReviews;