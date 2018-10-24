import React, { Component } from 'react'

const MovieReviews = ({ reviews }) => <ul className="review-list">{reviews.map((review, i) => <li className="review" key={i}> {review.display_title} </li>)}</ul>

export default MovieReviews
