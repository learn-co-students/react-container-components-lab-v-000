// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => 
    <div className='review-list'>
        <h1>Latest Releases</h1>
        {props.reviews.map((review, index) => (
            <div className='review' key={index}>
                <h2>{review.display_title}</h2>
                <img src={review.multimedia.src} />
                <p>Rating: {review.mpaa_rating}</p>
                <p>Opening Date: {review.opening_date}</p>
                <p>{review.headline}</p>
                <p>{review.summary_short}</p>
                <a href={review.link.url}>Go to Review</a>
            </div>
        ))}
    </div>

    export default MovieReviews

