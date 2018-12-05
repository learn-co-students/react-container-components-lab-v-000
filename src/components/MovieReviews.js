// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
    return (
        <section className='review-list'>
            {reviews.map(review => (
                <fieldset key={review.headline} className='review'>
                    <h2>{review.display_title}</h2>
                    <h3>{review.byline}</h3>
                    <h4>{review.summary_short}</h4>
                </fieldset>
            ))}
            
        </section>
    )
}

export default MovieReviews