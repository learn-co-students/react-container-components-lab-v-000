// Code MovieReviews Here
import React from 'react';


  const Review = (review) => {

  return (

    <div key={review.headline}
    className="review" >
    <h2> Title: {review.display_title} </h2>
    <p> Byline: {review.byline} </p>
  <p> Opening Date: {review.opening_date} </p>
    <span> Short Summary: {review.summary_short} </span>
    <p> ______________________________________________</p>  
    <br/>
    </div>
  )
};


const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(Review)}
 </div>);



MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;
