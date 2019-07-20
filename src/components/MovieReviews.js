// Code MovieReviews Here

import React from 'react'

const MovieReviews = ({reviews, text}) => <div className="review-list"><p>{text}</p><ul>{reviews.map(x => <li key={x.display_title} className="review">{x.display_title}</li>)}</ul></div>

export default MovieReviews
