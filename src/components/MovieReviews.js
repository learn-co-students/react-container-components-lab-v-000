// Code MovieReviews Here
import React from 'react';
// 
// const MovieReviews = ({reviews}) => (
//     <div className="review-list">
//       reviews.map(x => <div className="review"> <h1> ${x.display_title} </h1> </div>)
//     </div>
// );
const MovieReviews = ({reviews, text}) => <div className="review-list"><h6>{text}</h6><ul>{reviews.map(x => <li key={x.display_title} className="review">{x.display_title}</li>)}</ul></div>

export default MovieReviews




