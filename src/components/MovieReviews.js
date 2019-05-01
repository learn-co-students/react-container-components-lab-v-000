import React, { Component } from 'react';

const Review = ({ display_title, headline, summary_short, byline }) => (
	<li key={display_title} className="review">
		<h4>{ display_title }</h4>
		<h5>{ headline } by { byline }</h5>
		<p>{ summary_short } </p>
	</li>
)


const MovieReviews = ({reviews}) => (
	<ol className="review-list">
		{ reviews.map(Review) }
	</ol>
) 



export default MovieReviews