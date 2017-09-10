import React, { Component } from 'react';

const Movie = ({summary, title}) => {
    return (
        <div key={title} className="review">
        <p>{summary}</p>
        </div>
    )
}

const MovieReviews= ({reviews}) => {
    return (
    <div className="review-list">
     {reviews.map(Movie)}
    </div>
 )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;
