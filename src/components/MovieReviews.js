// Code MovieReviews Here
import React from 'react'

const Review = ({title, headline, summary, url}) => {
  const style = {
    width: '60%',
    margin: '16px auto',
    border: '1px solid #eee',
    boxShadow: '0 2px 4px #ccc',
    padding: '16px',
    textAlign: 'center'
  }

  return (
    <div style={style} className="review">
      <h1>{title}</h1>
      <p>Headline: {headline}</p>
      <p>Summary: {summary}</p>
      <a href={url}>{url}</a>
    </div>
  )
}

const MovieReviews = ({reviews}) => {
  return (
    <div className='review-list'>
      {reviews.map(review =>
        <Review
          key={review.display_title}
          title={review.display_title}
          headline={review.headline}
          summary={review.summary_short}
          url={review.link.url}
        />)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews
