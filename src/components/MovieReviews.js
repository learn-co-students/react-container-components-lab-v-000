// Code MovieReviews Here
import React from 'react'

// export const MovieReview = ({ display_title, summary_short, headline, link_url }) => (
//   <div className="review">
//     <h3>{ display_title }</h3>
//     <p>{ summary_short }</p>
//     <a href="{ link_url }">{ headline }</a>
//   </div>
// )

const Review = ({ display_title, summary_short, link_url, headline }) => {
  return(
    <div className="review">
      <h4>{ display_title }</h4>
      <p>
        { summary_short }<br />
        <a href="{ link_url }">{ headline }</a>
      </p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      { reviews.map(Review) }
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

// const ReviewList = ({ reviews }) => {
//   <div className="review-list">
//     { reviews.map(review => <MovieReview display_title="review.display_title" summary_short="review.summary_short" headline="review.headline" link_url="review.link.url" />) }
//   </div>
// }

export default MovieReviews;
