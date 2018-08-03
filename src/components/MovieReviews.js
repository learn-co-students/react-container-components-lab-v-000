// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return(
        <div className="review-list">
            {props.reviews.map(review => { 
                return (
                    <div className='review' key={review.display_title}>
                        <strong><a href={review.link.url}>{review.headline}</a></strong>
                        <small> Critic's Pick: {review.critics_pick ? 'Y' : "N"}</small>
                        <p>By: {review.byline}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default MovieReviews;
