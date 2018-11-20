import React from 'react';

const MovieReviews = ({ reviews }) => {
    return (

        <div className="review-list">
            <ul>


            {reviews.map(review => 
                <div className="review">
                    <li>
	                    <h3>{review.headline}</h3>
	                    <h3>{review.byline}</h3>
	                    <h3>{review.summary_short}</h3>
                    </li>
                </div>
		        )
            }
            </ul>
        </div>
    )
}

export default MovieReviews



