import React from 'react';


const MovieReviews = ({reviews}) =>  {
    const reviewList = reviews.map((review, index) =>
    <div className="review" key={index}>
        <h3>{review.display_title}</h3>
        <h5>{review.headline}</h5>
        <p>{review.summary_short}</p>
    </div>
    )

    return (
        <div className="review-list">
            {reviewList}
        </div>
    )


}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;
