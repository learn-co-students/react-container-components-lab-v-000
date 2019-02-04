// Code MovieReviews Here
import React from 'react';
import shortid from 'shortid';

const Review = (props) => {
    return (
        <div key={shortid.generate()} className="review">
            <h2><a href={props.link.url}>{props.headline}</a></h2>
            <span className="author">{props.byline}</span>
            <blockquote>{props.summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = (props) => <div className="review-list">{props.reviews.map(Review)}</div> 

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews