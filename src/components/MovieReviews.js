// Code MovieReviews Here
import React from 'react';
import Review from './Review';

const MovieReviews = (props) => {
    return <div className="review-list" >
        {props.reviews.map((review, index) => 
            <Review className="review" key={index} review={review} index={index}/>
        )}
    </div>
};
export default MovieReviews;