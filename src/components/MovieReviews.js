// Code MovieReviews Here
// ee2b42893979417296f9722dee2215af

import React from 'react'

const MovieReviews = ({reviews, text}) => <div className="review-list"><h6>{text}</h6><ul>{reviews.map(x => <li key={x.display_title} className="review">{x.display_title}</li>)}</ul></div>

export default MovieReviews