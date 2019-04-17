// Code MovieReviews Here
import React from 'react'

const ShowEachReview = ({
    headline,
    byline,
    display_title,
    link,
    summary_short,
    opening_date,
    mpaa_rating
}) => {
    return(
        <div key={headline} className="review">
            <h3>{display_title}</h3>
            <a href={link.url}>{headline}</a>, written by: {byline}
            <p>{summary_short}</p>
            <p>Opening date: {opening_date}</p>
            <p>MPAA Rating: {mpaa_rating}</p>
        </div>
    )
}

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map(ShowEachReview)}
        </div>  
    );
};

export default MovieReviews;