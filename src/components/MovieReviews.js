import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Review = ({ title }) => (
	<div className="review">
		<h3>{ title }</h3>
	</div>
)
	 
	 
const MovieReviews = ({ reviews }) => (
	<div className="review-list">
		{ reviews.map((review, idx) => <Review key={idx} title={review.display_title} />) }
	</div>
 )


MovieReviews.defaultProps ={   reviews: [] }

MovieReviews.propTypes = {   
	reviews: PropTypes.shape({     
		title: PropTypes.string.isRequired }) 
}


export default MovieReviews
