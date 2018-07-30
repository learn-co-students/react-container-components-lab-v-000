// Code MovieReviews Here
import React from 'react'


class MovieReviews extends React.Component {

  render() {
    return this.props.reviews.map(review =>{
      return (
        <div className="review-list" key={review.index}>
        {review.text}
        </div>
      )
    })
  }

}



export default MovieReviews
