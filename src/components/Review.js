// Code MovieReviews Here
import React, { PureComponent } from 'react';

const Review = props => {
  return <div className="review">
    <strong>{ props.review.display_title }</strong> by { props.review.byline } -- link: <a href={ props.review.link.url }>{ props.review.link.url }</a>
  </div>
}

export default Review;