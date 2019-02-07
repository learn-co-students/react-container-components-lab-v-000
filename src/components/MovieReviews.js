//Code MovieReviews Here
import React from 'react'

const MovieReviews = props => <div className="review-list">{props.reviews.map(movieReview)}</div>


const movieReview = ({ headline, byline, link, summary_short }) => {
    return(
        <div key={headline} className="review">
            <header>
                <a className="review-link" href={link.url}>{headline}</a>
                <br />
                <span className="author">{byline}</span>
            </header>       
            <p>{summary_short}</p>
        </div>
    );
};

export default MovieReviews;