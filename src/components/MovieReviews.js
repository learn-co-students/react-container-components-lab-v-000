import React from 'react';

const MovieReviews = ({reviews}) => {
    return (
        <div className="review-list">
            {reviews.map((review, idx) =>
                (<div key={idx} className="review">
                    <a href={review['link']['url']}><h3>{review["headline"]}</h3></a>
                    <p>{review["summary_short"]}</p>
                </div>)
            )}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;