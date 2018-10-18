// Code MovieReviews Here
import React, {Component} from 'react'

const MovieReviews = ({reviews}) => (
    <div className="review-list">
    {reviews.map(movie=><Review title={movie.display_title} byline={movie.byline} headline={movie.headline} summary={movie.summary_short} />)}
    </div>
)

const Review = ({title, byline, headline,summary}) => (
    <div className ="review">
    <h1>{title}</h1>
    <h2>By: {byline}</h2>
    <h3>{headline}</h3>
    <h3>{summary}</h3>
    </div>
)
// MovieReviews.defaultProps = {
//     reviews: []
//   };
export default MovieReviews 