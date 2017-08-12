// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews})=>{
  return (<div className="review-list">{reviews.map((movie)=>{
    if(movie.multimedia)return (<img src={movie.multimedia.src} alt={movie.headline} className="review"/>);
    else return (<p className="review">{movie.headline}</p>);
  })}</div>);
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
