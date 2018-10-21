// Code MovieReviews Here
import React from 'react';

const MovieReviews =({reviews}) => {
    // console.log("results from MoviewREview:", results)

     const reviewList = (reviews.map((review, key) => (
        <div key={key} className="review">
            <h3>{review.headline}</h3> 
            <p>{review.summary_short}</p>
        </div>))
         )

    // let tempList = <h3>TESTING</h3>
    return (
        <div className="review-list">
            {reviewList}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews