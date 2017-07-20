// Code MovieReviews Here
import React from 'react';

const Review = ({headline, byline, link, summary_short}) => {
    return (
        <div key={headline} className="review">

        </div>
    )
}

const MovieReviews = (props) => {
    return (
        <div className="review-list">
            {props.reviews.map(Review)}
        </div>
    );
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews