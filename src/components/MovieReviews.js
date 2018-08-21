import React from 'react';

const MovieReviews = (review) => {
  return (<div>
    <h3>Title: {review.review.display_title}</h3><br/>
    {/* <img alt={review.display_title} src={review.multimedia.src} height={review.multimedia.height} width={review.multimedia.width} /><br/> */}
    <h4>Headline: {review.review.headline}</h4><br/>
    <h4>Critics Pick: {review.review.critics_pick}</h4><br/>
  </div>)
}

export default MovieReviews;