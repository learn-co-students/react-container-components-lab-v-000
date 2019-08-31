// Code MovieReviews Here
import React from 'react';


const Review = ({display_title, headline, summary_short}) =>{
    return (
        <div className='review'>
            <h2>{display_title}</h2>
            <h3>{headline}</h3>
            <p>summary_short</p>
        </div>
    )
}

const MovieReviews = ({reviews}) =>
<div className='review-list'>
    {reviews.map(Review)}
</div>

export default MovieReviews