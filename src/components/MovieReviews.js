import React, { Component } from 'react';


const Review = ({ details }) => {
    return (
        <div className='review'>{details.display_title}</div>
    )
}

const ReviewList = ({reviews} ) => {
    return (
        <div>
            {reviews.length > 0 ? reviews.map(rev => <Review details={rev} />) : null}
        </div>
    )
}

const MovieReviews = (props) => {
    return (
        <div className='review-list'><ReviewList reviews={props.reviews}/></div>
    )
}

export default MovieReviews
