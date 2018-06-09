

import React from 'react'

const Review = ({display_title, headline, mpaa_rating, link}) => {
	return (
	<div className="review-list">
	  	<div key={ headline } className="review">
	  		<div>Title: <a href={ link.url }>{ display_title }</a></div><br />
			<div>{ headline }</div><br />
			<div>Rating: { mpaa_rating ? mpaa_rating : 'No Rating' }</div><br />
	  	</div>
	</div>
)};


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews;
