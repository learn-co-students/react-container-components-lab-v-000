import React from "react";

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      { reviews.map((review, idx) => <Review review={review} key={idx} />) }
    </div>
  )
}

const Review = ({review, idx}) => {
  return (
    <div key={idx} className="review">
      <a href={review.link.url} target="_blank" rel="noopener noreferrer"><h1>{review.headline}</h1></a>
      {review.opening_date !== null ? <h2>Opening {review.opening_date}</h2> : <p>Opening date TBD</p>}
      <p>Author: {review.byline}, Published: {review.publication_date}</p>
      {review.multimedia !== null ? <a href={review.link.url} target="_blank" rel="noopener noreferrer"><img src={review.multimedia.src} alt={review.display_title} /></a> : <p>No image</p>}
      <p>{review.summary_short}</p><br />
    </div>
  )
}

export default MovieReviews