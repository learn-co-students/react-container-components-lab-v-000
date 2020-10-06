import React from 'react'



const Review = ({ headline, byline, summary_short}) => (
  <div className="review">
    <h2>{ headline}</h2>
    <h3>{byline}</h3>
    <p>{summary_short}</p>
  </div>
)


const MovieReviews = ({ reviews}) => (
  <div className="review-list">
  { reviews.map(review => <Review headline={review.headline}
    byline={review.byline} summary_short={review.summary_short}/>)}
</div>
)




export default MovieReviews;
