import React from 'react';

const MovieReviews = (props)=> {
  return(
    <div className="review-list">
      {props.reviews.map((movie,index)=>{ 
        return <div key={index.toString()} className="review"> {movie.display_title}</div>
      })}
    </div>  
  ) 
}
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews