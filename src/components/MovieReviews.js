// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = props => {
	console.log(props);
  
  return (
    <div className= 'review-list'>
       {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )

}

export default MovieReviews