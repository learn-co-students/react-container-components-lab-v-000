// Code MovieReviews Here

import React from 'react';

const MovieReview = ({ display_title }) => {
    return(
        <div key={ display_title } className="review">
            <h2>{ display_title }</h2>
        </div>
    )

}

const MovieReviews = ({ reviews }) => (
        <div className='review-list'>
            { reviews.map( review => MovieReview(review) )}
        </div>
)

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews
