import React from 'react';
// import React, { Component } from 'react';

// const MovieReviews = ({reviews}) => {

//   const formatedReviews = reviews.map(review => review.display_title)

//   return (
//     <div className="review-list">
//       <h3>{formatedReviews}</h3>
//         {/* <li>{review.display_title}</li>  */}
//         {/* * <li>critics_pick={review.critics_pick}</li>
//         <li>summary_short={review.summary_short}</li> */}
//     </div>
//  
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(review => review.display_title)}</div>;

export default MovieReviews;

// class MovieReviews extends Component {
//   render () {
//     debugger
//   // const formatedReviews = this.props.reviews.map(review => {    
            
//   // }
//   //   )
// console.log(this.props.reviews)
//    return (
//      <div className="review-list">
//        {/* <h3>{formatedReviews}</h3> */}
//        <h3>Hello</h3>

//          {/* <li>{this.props.review.display_title}</li>  */}
//          {/* * <li>critics_pick={review.critics_pick}</li>
//          <li>summary_short={review.summary_short}</li> */}
//      </div>
//    );
//   };
// }
//  export default MovieReviews;
