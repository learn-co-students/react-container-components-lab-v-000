import React from 'react'
// import React, { Component } from 'react';

const MovieReviews = ({ reviews }) => {
  
  //this way, if this component renders before fetch is complete, 
  //it will wait to assign the value until it completes fetch.
  let formatedReviews 
  if (reviews) {
    formatedReviews = reviews.map(review => <h3>{review.display_title}</h3>)
  }
  // const formatedReviews = reviews.map(review => review.display_title)
    return (
      <div className="review-list">
        <h3> hey</h3>
        {formatedReviews}
          {/* <li>{review.display_title}</li>  */}
          {/* <li>{review.critics_pick}</li> */}
          {/* <li>{review.summary_short}</li> */}
      </div>
    )
  }


export default MovieReviews