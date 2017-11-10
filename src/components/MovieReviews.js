import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'b0de5a02334245c396bd7a33ba979bf1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

const Review = ({ display_title, headline, summary_short, src  }) => {
  return (
    <div className="review">
      <h4>{display_title}</h4>
      <h5>{headline}</h5>
      <h5>{summary_short}</h5>
      <img src={src}/>
      <hr />
    </div>
  )
}

const ReviewList = ({ reviews }) => (
  <div className="review-list"> 
    { reviews.map(review => <Review 
      display_title= {review.display_title} 
      headline= {review.headline} 
      summary_short= {review.summary_short} 
      src= {review.multimedia.src}
      /> )}
  </div>
);

const reviews = () => {
  fetch(URL)
    .then(res => res.json())
    .then(response => { return response.results });
}

class MovieReviews extends Component {
  render() {
    return (
      <ReviewList className="review-list" reviews={reviews} />
    )
  }
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;