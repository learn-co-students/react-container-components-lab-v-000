// Code MovieReviews Here
import React from 'react';


const Review = ({display_title, byline, opening_date, summary_short, headline})=> {
  return (
    <div key={headline}
    className="review">

    <h2> Title: {display_title} </h2>
    <p> Byline: {byline} </p>
    <p> Opening Date: {opening_date} </p>
    <span> Short Summary: {summary_short} </span>
    <br/>
    </div>
  )
};



const MovieReviews = ({reviews}) => (
  <div className="review-list">
  { reviews.map(Review)} </div>);

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews;
