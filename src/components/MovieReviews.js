import React, { Component } from 'react';

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review">
      <h2>{headline}</h2>
      <h3>By: {byline}</h3>
      <p>TL;DR: {summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
	return (
		<div className="review-list">
			{reviews.map(review => <Review headline={review.headline} byline={review.byline} link={review.link} summary_short={review.summary_short} />)}
		</div>
	)
}

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews;


