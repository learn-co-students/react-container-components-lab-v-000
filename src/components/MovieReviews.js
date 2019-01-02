// Code MovieReviews Here
import React from 'react';
// 
const MovieReviews = (props) => (
    <div className="review-list">
      props.reviews.map(movie => <div className="review"> <h1> ${movie.display_title} </h1> </div>)
    </div>

);


export default MovieReviews;
