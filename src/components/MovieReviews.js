
import React from 'react'

const MovieReviews = (props) => {

  let reviews = props.reviews.map(review => {
    return <li className='review'>
            <h4>{review.headline}</h4>
            <p>{review.display_title}</p>
            <p>By {review.byline}</p>
            <p>{review.summary_short}</p>
          </li>
  })

  return (
    <div className='review-list'>
      <ul>
        {reviews}
      </ul>
    </div>
  )

}

MovieReviews.defaultProps = {
  reviews: [],
}

export default MovieReviews
