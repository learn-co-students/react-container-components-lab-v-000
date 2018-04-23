// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(MovieReview)}
    </div>
  )
}
/*
{reviews.map(review => <MovieReview title={review.headline} url={review.link.url}/>)}

class MovieReviews extends React.Component {
  render() {
    let reviews = this.props.reviews.map(review => <MovieReview title={review.headline} url={review.link.url}/>)
    
    return (
      <div className="review-list">
        { reviews }
      </div>
    )
  }
}

const MovieReview = ({title, url}) => {
  console.log("title, url: ", title, url);
  return (
    <li className="review" key={title}>
      <h3>{title}</h3>
      <a href={url}>{url}</a>
    </li>
  )
}
*/

const MovieReview = (review) => {
  return (
    <li className="review">
      <h3>{review.title}</h3>
      <a href={review.link.url}>{review.link.url}</a>
    </li>
  )
}

MovieReviews.defaultProps = {reviews: []};	

export default MovieReviews;
