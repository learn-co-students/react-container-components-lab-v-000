import React from 'react'; 

// const Review = ({ title }) => {
//   return (
//       <h3>{title}</h3>
//   )
// }



const MovieReviews = props => 
  <div className="review-list"> 
    {props.reviews.map(r => (<h3>{r.display_title}</h3>))}
  </div>; 
  
 MovieReviews.defaultProps = { 
     reviews: []
}  



export default MovieReviews;

