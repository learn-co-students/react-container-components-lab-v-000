import React, { Component } from "react";
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'

const MovieReviews = ({ reviews }) => (
    <div className='review-list'>
    <ul>
    {reviews.map((review, index) => 
    <div className='review' key={index}>
    <li>
        <strong>{review.display_title}</strong>
        <ul>
        <li><img src={review.multimedia.src}></img></li>
        <li>
        {review.summary_short}
        </li>
        <li>Full Summary: <a href={review.link.url}>{review.link.url}</a></li>
        </ul>
    </li>
    <br></br>
    </div>
    )}
    </ul>
    </div>
)

export default MovieReviews