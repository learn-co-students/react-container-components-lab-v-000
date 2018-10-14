// Code MovieReviews Here

import React from 'react';

const MovieReviews= (props) =>
    <div className="review-list">
        <h1>{props.header}</h1>
        {props.reviews ?
            <ul>
                {props.reviews.map (review => 
                    <li className="review" key={review.display_title}>
                        <a href={review.link.url}>{review.display_title}</a>    
                    </li>
                )} 
            </ul>  
            : <p>fetching...</p>
        }   
    </div>;

export default MovieReviews;

