// Code MovieReviews Here
import React from 'react' 

const Review = ({
  headline,
  byline,
  summary_short
}) => {
  return (
  <div className="review">
  <h3>{ headline }</h3>
  <h5>{ byline }</h5>
  <p>{summary_short}</p>
  </div>
  )
}


const MovieReviews = ({ reviews }) => (
        <div className="review-list">
        { reviews.map(Review)} 
        </div>
    )

    MovieReviews.defaultProps = {
      reviews: []
    }


export default MovieReviews