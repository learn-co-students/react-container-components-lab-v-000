// Your MovieReviews component should be stateless and functional.
// Lay out each review as you like using the data that the API returns, 
// but make sure that the component outputs a top-level element 
// with the class review-list 
// and that each review is wrapped by an element with class review.
import React, { Component } from 'react';

// const MovieReview = ({
//   headline,
//   title, 
//   summary, 
//   link 
// }) => {
//   return (
//     <div key={headline} className="review" >
//       <ul>
//         <h3><i>{title}</i></h3>
//         <p>{summary}</p>
//         <p><a href={link}>Read Review</a></p>
//       </ul>
//     </div>
//   )
// };

// const MovieReviews = ({ reviews }) => {
//   return (
//     <div className="review-list">
//       {reviews.map(review => {
//         return <MovieReview headline={review.headline} title={review.display_title} summary={review.summary_short} link={review.link.url}/>
//       })}
//     </div>
//   )
// };

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"

          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;


MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;