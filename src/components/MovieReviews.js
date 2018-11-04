// Code MovieReviews Here
//presentational component
//lists movie reviews. will be used by the two containers

import React from 'react';

const MovieReviews = (props) => {
  console.log(props)
  return(
    <div className="review-list">
      {props.reviews.map(Review)}
    </div>
  )
}

const Review = ({display_title, byline, headline, summary_short}) => {
  return (
    <div className="review" key={display_title}>
      <h3>{headline}</h3>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  )

}

export default MovieReviews
