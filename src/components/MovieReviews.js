import React from 'react';
import Movie from './Movie';

const MovieReviews = ({ movies }) => (
  <div className="review-list">
    {console.log(movies)}
    { movies.map(movie => <Movie movieTitle={movie.display_title} movieCritic={movie.byline} reviewHeadline={movie.headline} reviewLink={movie.link.url}  />) }
  </div>
)

MovieReviews.defaultProps = {
  movies: []
}

export default MovieReviews;
