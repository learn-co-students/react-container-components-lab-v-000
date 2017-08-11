// Code MovieReviews Here
import React from 'react';


const MovieReviews = ({reviews}) => {
  const list = reviews.map( review => <li className="review" id="{review.id}">{review.content}</li>)
  return (
    <div className="review-list">
      <ul>
        {list}
      </ul>
    </div>
  )
}

// class MovieReviews extends React.Component{
//   render(){
//     const reviews = this.props.reviews.map( review => <li className="review" id="{review.id}">{review.content}</li>)
//
//
//     return(
//       <div className="review-list">
//         <ul>
//           {reviews}
//         </ul>
//       </div>
//     )
//   }
// }

export default MovieReviews

MovieReviews.defaultProps = {
  reviews: "There is no review for this movie"
}
