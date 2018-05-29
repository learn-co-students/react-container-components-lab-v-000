import React from 'react';

const Review = ({byline, headline, summary_short, publication_date}) => { 
    return (
        <div key={headline} className="review">
        <h3>Title:{headline}</h3>
        <h5>Reviewer: {byline}</h5>
        <p>Summary: {summary_short}</p>
        <p>Publish Date: {publication_date}</p>
        </div>
    )
}

//Map each review into a <Review />

const MovieReviews = ({reviews}) => <div className="review-list">{reviews.map(Review)}</div>;

//Set the reviews default to []

MovieReviews.defaultProps = { 
    reviews: []
}

export default MovieReviews

