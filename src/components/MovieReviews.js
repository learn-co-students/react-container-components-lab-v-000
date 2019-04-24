// Code MovieReviews Here
import React from 'react'

const Review = ({ display_title, byline, link, summary_short }) => {
	return (
		<div key={display_title} className="review">
      <header>
        <p><strong>Movie: </strong></p>
				<p><a className="review-link" href={ link.url }>{ display_title }</a></p>
        <p className="author"><strong>Review by: </strong></p>
				<p>{ byline }</p>
      </header>
      <p><strong>Summary: </strong></p>
			<p>{ summary_short }</p>
			<br/>
    </div>
	)
}

const MovieReviews = ({ reviews }) => (
	<div className="review-list">
		{ reviews.map(Review)}
	</div>
)

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews