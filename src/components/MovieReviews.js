// Your MovieReviews component should be stateless and functional.
// You are free to lay out each review as you like using the data that the API returns, 
// but make sure that the component 
// outputs a top-level element with the class review-list and that each review is wrapped by an element with class review.
import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className={'review-list'} >
      {props.movieArray ? props.movieArray.map((review, index) => <p key={index} className={'review'}>Short Review: {review}</p>) : 'blank'}
    </div>
  );
}

export default MovieReviews