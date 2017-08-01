import React from 'react';

const showReview = ({display_title, headline, summary_short, link}) => {
    return (
        <div key={headline} className="review">
            <h1>{display_title}</h1>
            <h2>{headline}</h2> 
            <p>{summary_short}</p>
            <p><a href={link.url}>Read more</a></p>
        </div>
    )
}

const MovieReviews = ({ reviews }) => {
    return(
        <div className="review-list">
            {reviews.map(showReview)}
        </div>
    )
};

export default MovieReviews;

MovieReviews.defaultProps = {
    reviews: []
};