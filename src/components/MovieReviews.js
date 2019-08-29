import React from 'react'

const MovieReviews = (props) => {
  return (
    <div className='review-list'>
      <div>
        { props.reviews.map( review => 
          <ul>
            <li className='review'>{ review.headline }</li>
          </ul>
          )
        }
      </div>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};      

export default MovieReviews