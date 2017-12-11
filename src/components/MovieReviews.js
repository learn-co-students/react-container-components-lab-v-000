import React from 'react';

const MovieReviews = ({ reviews }) => (
	<ol className="review-list">
		{reviews.map(review => <li className="review">{review.display_title}</li>)}
	</ol>
)

MovieReviews.defaultProps = {
	reviews: []
}

export default MovieReviews



// import React from 'react'

// const MovieReviews = ({reviews}) => (
//   <ul className="review-list">
//     {reviews.map((rev) => <li className="review">{rev.mpaa_rating} - {rev.byline}</li>)}
//   </ul>
// )

// MovieReviews.defaultProps = {
//   reviews: []
// }

// export default MovieReviews