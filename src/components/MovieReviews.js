// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    
    const latestMovieReviews = props.reviews.map(r =>
      <div className="review">
        <br></br>
        Headline: {r.headline}
        <br></br>
        Summary: {r.summary_short}
        <br></br>
        Link: {r.link.url}
        <br></br>
        <br></br>
  
      </div>)
      
    return (
      <div className="review-list">
        {latestMovieReviews}
      </div>
    )
  }
  
  MovieReviews.defaultProps = {reviews: []}
  
  export default MovieReviews
  