// Code MovieReviews Here
import React from 'react';

const Review = ({
    headline, byline, link, summary_short
    }) => (
    <div key={headline} className="review">
        <h3>{headline}</h3>
        <p>{byline}</p>        
        <blockquote>{summary_short} <a href={link.url}>More..</a></blockquote>
        
    </div>
)

const MovieReviews = ({reviews}) => (
    <div className="review-list">
        {reviews.map(Review)}
    </div>
)

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;

// API info: http://developer.nytimes.com/movie_reviews_v2.json#/Documentation/GET/critics/%7Bresource-type%7D.json
