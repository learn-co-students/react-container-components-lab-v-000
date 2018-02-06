import React from 'react';


const MovieReview = ({ reviews }) => {

    const reviewComponenets = reviews.map((review, index) => <p className="review" text={review.text} key={index} />);

    return (
      <div className='review-list'>{reviewComponenets}</div>
    );

}

MovieReview.defaultProps = {reviews: []};

export default MovieReview;


