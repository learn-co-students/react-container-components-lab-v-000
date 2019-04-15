// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(review => (
      // <Review review={review} key={review.headline} />
      <div className="review">
        <header>
          <a className="review-link" href={review.link.url}>
            {review.headline}
          </a>
          <br />
          <span className="author">{review.byline}</span>
          <blockquote>{review.summary_short}</blockquote>
        </header>
      </div>
    ))}
  </div>
);

// Learn test does shallow checking and will fail with this correct code
// const Review = ({ review }) => (
//   <div className="review">
//     <header>
//       <a className="review-link" href={review.link.url}>
//         {review.headline}
//       </a>
//       <br />
//       <span className="author">{review.byline}</span>
//       <blockquote>{review.summary_short}</blockquote>
//     </header>
//   </div>
// );

export default MovieReviews;
