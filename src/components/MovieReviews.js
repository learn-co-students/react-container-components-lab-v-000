import React, { Component } from 'react';

const Review = ({display_title, byline, headline, link, summary_short}) => {
    return (
        <div className="review" key={headline}>
            <h3>{display_title}</h3>
            <h4>{byline}</h4>
            <a href={link.url}>{headline}</a>
            <p>{summary_short}</p>
        </div>
    )
}
const MovieReviews = ({reviews}) => 
    <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews;