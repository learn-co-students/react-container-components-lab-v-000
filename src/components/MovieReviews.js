// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => 
    <div className="review-list">
        {reviews.map(review => {
            return(
                <div className="review">
                    <h3>{review.headline}</h3>
                    <p>{review.summary_short}</p>
                    <img src={review.multimedia.src} alt={review.display_title}/><br/>
                    <a className="review-link" href={review.link.url}>Read More Review</a>
                    <br/><br/><br/>
                </div>
            )})
        }
    </div>


export default MovieReviews;