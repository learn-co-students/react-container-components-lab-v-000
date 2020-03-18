import React from 'react';
import Movie from './Movie';

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(movie => <Movie movieTitle={movie.display_title} movieCritic={movie.byline} reviewHeadline={movie.headline} reviewLink={movie.link.url}  />) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
