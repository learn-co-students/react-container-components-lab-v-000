// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => 
    <div className='review-list'>
        {props.reviews.map((review) => {
            return(
               <p key={review.display_title}>
                    <a
                        key={review.display_title}
                        className='review'
                        href={review.link.url}
                    >
                        {review.display_title}
                    </a>
                </p>
            )
        })}
    </div>    

export default MovieReviews;