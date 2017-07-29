import React from 'react';

const review = ({
    headline,
    byline,
    summary_short,
    link
}) => {
    return(
        <div className='review'>
            <h2>{ headline }</h2>
            <h3>{ byline }</h3>
            <a href={ link.url }>{ link.suggested_link_text }</a>
            <p>{ summary_short }</p>
        </div>
    );
};

const MovieReviews = ({ reviews }) => (
    <div className='review-list'>
        {reviews.map(review)}
    </div>
);

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;