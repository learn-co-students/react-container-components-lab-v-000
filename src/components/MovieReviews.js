import React from 'react';

const reviewListItem = review => {
  return (
    <li className="review" key={review.headline}>
      <h3>{review.headline}</h3>
      <span>by {review.byline}</span>
      <p><strong>Sneak Peek</strong>: {review.summary_short}</p>
      <a href="{review.link.url}">{review.link.suggested_link_text}</a>
    </li>
  );
}

const MovieReviews = props => {
  return (
  	<ul className="review-list">
  	  {props.reviews.map(reviewObject => reviewListItem(reviewObject))}
    </ul>
  );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;

// MovieReviews specifications:
// MovieReviews should be a stateless functional component
// MovieReviews component outputs a top-level element with the class "review-list"
// MovieReviews should render all the reviews
// each review is wrapped by an element with class "review"
