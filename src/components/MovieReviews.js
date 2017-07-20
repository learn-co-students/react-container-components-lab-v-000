import React from 'react';

const MovieReviews = ({reviews}) => {

	return (
		<ul className="review-list">
			{reviews.map((review,index) => <li className="review" key={index}>review</li>
			)}
		</ul>
	);
}

MovieReviews.defaultProps = {
	reviews: [],
};

export default MovieReviews;