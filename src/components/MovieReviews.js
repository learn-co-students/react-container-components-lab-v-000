import React from 'react';

const MovieReviews = function(props) {
    return <div className="review-list">
        {props.reviews.map((review) => 
            <div className="review" key={review.id}>
                {review.display_title}
            </div>
        )}
    </div>
}

export default MovieReviews

