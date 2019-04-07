import React from 'react';

const Review = ({ headline, byline, summary_short }) => (
    <div key={headline} className='review'>
        {headline}
        <p>{byline}</p>
        <blockquote>{summary_short}</blockquote>
    </div>
)

const MovieReviews = ({ reviews }) => (
    <div className="review-list">
        { reviews.map(Review) }
    </div>
)

export default MovieReviews