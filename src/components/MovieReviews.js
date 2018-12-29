// Code MovieReviews Here
import React, { Component } from 'react';

const Review = ({ headline, link, byline, summary_short}) => {
    return <div className="review">
        <p><a className="review-link" href={link.url}>{headline}</a></p>
        <p className="author">{byline}</p>
        <p>{summary_short}</p>
        </div>
}

const MovieReviews = ({ reviews }) => (
    <div className="review-list">{reviews.map(Review)}</div>
)


MovieReviews.defaultProps = {
    reviews: ['No Reviews']
};

export default MovieReviews