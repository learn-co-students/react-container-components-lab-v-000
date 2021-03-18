// Code MovieReviews Here
import React from 'react';
import Review from './Review.js'

const MovieReviews = (props) => {
    return <div className="review-list" >
        {props.reviews.map((review, index) => {
            return <Review className="review" key={index} review={review} index={index}/>}
        )}
    </div>
}
export default MovieReviews;