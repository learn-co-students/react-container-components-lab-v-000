import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = (props) => {
    const constructReviews = () => (
        props.reviews.map(({
            multimedia, 
            display_title, 
            byline, 
            publication_date, 
            critics_pick, 
            headline,
            summary_short,
            link
        }) => (
            
                <MovieReview
                multimedia={multimedia}
                displayTitle={display_title}
                author={byline}
                publicationDate={publication_date}
                isCriticsPick={!!critics_pick}
                headline={headline}
                shortSummary={summary_short}
                link={link}
                key={display_title + publication_date + byline}
            />
            
        ))
    )

    return <div className="review-list">{constructReviews()}</div>
}

export default MovieReviews