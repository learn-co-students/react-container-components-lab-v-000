// // Code MovieReviews Here
import React from 'react'
import { link } from 'fs'

const Review = ({
  
  headline,
  byline,
  summary_short
}) => {
  return (
 
    <div
    
      key={headline}
      className='review'
    >
    
      <header>
        <a
            className='review-link'
            href={link.url}
        >
            {headline}
          </a>
        <br />

        <span className='author'>{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  )
}

const MovieReviews = ({ reviews }) =>
  <div className='review-list'>{reviews.map(Review)}</div>
  // the Review Spits out headline: any; byline: any; summary_short: any; 
  // Which is used up top
  MovieReviews.defaultProps = {
  reviews: []
  
}




export default MovieReviews
