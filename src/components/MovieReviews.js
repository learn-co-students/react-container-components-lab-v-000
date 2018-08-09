import React from 'react'

const Review = ({display_title, headline}) => {return <div key={headline} className="review">{display_title}</div>}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

export default MovieReviews
