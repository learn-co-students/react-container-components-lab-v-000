// Code MovieReviews Here
import React, { Component } from 'react';
import 'isomorphic-fetch';



// classless function
function MovieReviews(props){
  return(
    <div className="review-list">
    {props.reviews.map(review =>
      <div className="review" key={review.display_title} >
        <p>Movie Title: {review.display_title} Review: {review.summary_short}</p>
      </div>
    )
    }
    </div>
  )
}

// class MovieReviews extends Component {
// render(){
//   return(
//     <div className="review-list">
//     {this.props.reviews.map(review =>
//       <div className="review" key={review.display_title} >
//         <p>Movie Title: {review.display_title} Review: {review.summary_short}</p>
//       </div>
//     )
//     }
//     </div>
//   )}
// }



export default MovieReviews;
