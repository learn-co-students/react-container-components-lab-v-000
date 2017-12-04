// Code MovieReviews Here

import React from 'react';

const Review = ({
   headline,
   byline,
   link,
   summary_short,
   date_updated
 }) => {
   return (
 
     <div key={headline} className="review" >
       <h2><a href={link.url} >{headline}</a></h2>
       <h3>By: {byline}</h3>
       <p>Last updated on: {date_updated}</p>
       <p>{summary_short}</p>
     </div>
   )
}

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
   reviews: []
}

export default MovieReviews;