import React from 'react';

// Code MovieReviews Here

const MovieReviews = ({reviews}) => {

    return(
      <div className="review-list">
        {reviews.map(review =>
        <li className="review" key={review.headline}><strong>{review.headline}</strong> <br/><br/> {review.byline} <br/><br/> {review.summary_short}<br/><br/></li>)}
      </div>
    )
}


export default MovieReviews;
