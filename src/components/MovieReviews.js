// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <section className='review-list'>
            {reviews.map(review => (
                <ul key={review.headline} className='review'>
                    <h2>{review.display_title}</h2>
                    <li>{review.byline}</li>
                    <li>{review.summary_short}</li>
                </ul>
            ))}
            
        </section>
    )
}

export default MovieReviews