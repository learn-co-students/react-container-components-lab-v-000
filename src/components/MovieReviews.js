import React from 'react';

const MovieReviews = (props) =>
	<div className="review-list">
		{props.reviews.map((movie, index) =>
		<div className="review" key={index}>
			<a href={movie.link.url}><h4>{movie.display_title}</h4></a>

			<p>{movie.summary_short}</p>
		</div>
		)}
	</div>

	export default MovieReviews

				// <p>Critics' Pick? {props.critics(movie)}</p>