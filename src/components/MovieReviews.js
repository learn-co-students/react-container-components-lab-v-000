
import React from 'react'

const MovieReviews = ({reviews}) => {
    // debugger;

    const reviewLayout = reviews => {
        return reviews.map(({byline, headline, summary_short}) => {
            return (<div key={headline} className="review">
                <h2>{headline}</h2>
                <span><strong>Author:</strong> {byline}</span>
                <br/>
                <h4 htmlFor="">Summary:</h4>
                <blockquote>{summary_short}</blockquote>
                <br/><br/>
            </div>)

        })
    }


    return (
        <div className="review-list">{reviewLayout(reviews)}</div>
    )
}

export default MovieReviews
