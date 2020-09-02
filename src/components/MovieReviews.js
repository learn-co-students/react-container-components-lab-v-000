// Code MovieReviews Here
// stateless and functional
// outputs a top-level element with the class review-list 
// and that each review is wrapped by an element with class review.
import React from 'react';

const MovieReviews = (props) =>
  <div className="review-list">
      {props.reviews.map(movie => {
          return <div className="review" key={movie.display_title}>
                <a href={movie.link.url}>{movie.headline}</a>
                <p>By: {movie.byline}</p>
                <hr></hr>
            </div>
      })}
  </div>

export default MovieReviews