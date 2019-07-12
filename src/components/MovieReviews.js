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
  if (props.reviews){
    return (<div className="review-list">
    {props.reviews.map(Review)}
     </div>  )
  }else {

  return (
   <div className="review-list">

    </div>
    )
  }
}

export default MovieReviews
