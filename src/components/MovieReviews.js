import React from 'react'

const MovieReviews = ({ reviews }) => (
  <ul className='review-list'>
    {reviews.map(review => <li className='review'>
      <h2><a href={review.link.url}>{review.headline}</a></h2>
      <p>{review.summary_short}</p>
      <img src={review.multimedia.src} alt={review.title}/>
      <p>{review.publication_date}</p>
    </li>)}
  </ul>
)

export default MovieReviews
