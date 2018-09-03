import React, { Component } from 'react';


const Review = ({byline, headline, link, display_title}) => (
  <div className="review" key={headline}>
  <ul>
    <h3>Movie Title: {display_title}</h3>
    <li><h5>Review Author: {byline}</h5></li>
    <li><h5>Review: <a href={link.url}>{link.suggested_link_text}</a></h5></li>
  </ul>
  </div>
  )



const MovieReviews = ( {reviews} ) => (
<div className="review-list">
  {reviews.map(Review)}
</div>
)

 

    

    










 export default MovieReviews