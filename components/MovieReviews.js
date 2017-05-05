import React from 'react'



const MovieReviews = ({reviews}) => {
  return(
    <div className="review-list" >
    {reviews.map(Review)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

const Review = ({headline, byline, summary_short}) => {
  return(
  <div key={headline} className="review" >
        <h2>Headline: {headline} </h2>
        <h2>{byline}</h2>
        <h3>Summary: {summary_short} </h3>
      </div>
  )    
}

module.exports = MovieReviews;
