import React from 'react'

//const Review = ({ movieTitle, reviewTitle, critic, summary }) => (
//  <div className="review">
//    <h3>{ reviewTitle } by: { critic }</h3>
//    <p>{ summary }</p>
//  </div>
//)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map((review, index) => {
      return(
        <div className="review" key={index}>
          <h3>{ review.display_title } by: { review.byline }</h3>
          <p>{ review.summary_short }</p>
        </div>
      )
    })}
  </div>
)

export default MovieReviews

//<Review key={index} movieTitle={review.display_title} reviewTitle={review.headline} critic={review.byline} summary={review.summary_short}/>) }
