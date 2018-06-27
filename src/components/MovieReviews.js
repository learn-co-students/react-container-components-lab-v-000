// Code MovieReviews Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// export default class MovieReviews extends React.Component {
//   constructor (props) {
//     super(props)
//   }
//   render () {
//     return (
//       <div className="review-list">hi</div>
//     )
//   }
// }

const MovieReviews = ({
  reviews
}) => {
  const reviewList = reviews.map ((review) =>  {
    return<li className="review">{review.display_title}</li>
  })
  return (
      <div className="review-list">
        <ul>{reviewList}</ul>
      </div>
  )
}
MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
