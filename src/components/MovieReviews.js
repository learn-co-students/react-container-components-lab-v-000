import React from 'react'

  const Review = ({display_title, headline, summary_short, link}) => {
    return(
      <div className='review' key={headline}>
        <a href={link.url}>{display_title}</a>
        <p>{headline}</p>
        <p>{summary_short}</p>
      </div>
    )
  }

const MovieReviews = ({ reviews }) => {

    MovieReviews.defaultProps = {
      reviews: []
    }

  return (
    <div className="review-list">{reviews.map(Review)}</div>
  )
}
export default MovieReviews