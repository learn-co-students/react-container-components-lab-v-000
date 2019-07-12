import React from 'react'


const Review = ({headline, byline, link, summary_short}) => {
  return (
    <div className="review" key={headline}>
    <li>{headline}</li>
    <li>{byline}</li>
    <li>{summary_short}</li>
    </div>
  )
}

const MovieReviews = props => {


  return (
    <div className="review-list">
      {props.movies && props.movies.map(Review)}
    </div>
  )
}

export default MovieReviews
