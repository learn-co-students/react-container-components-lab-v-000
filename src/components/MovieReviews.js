import React from 'react';

const Review = ({headline}) => { return<div className="review"><p>{ headline }</p> </div>}

// const MovieReviews = ({ reviews }) =>{
//     <div className="review-list">
//       { reviews.map(review => <Review  key={review.url} headline={review.headline}/>)}
//     </div>
// }

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

//Which component should iterate over all the of the movie reviews?
export default MovieReviews