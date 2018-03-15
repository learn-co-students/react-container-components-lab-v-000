import React from 'react';

const Review = ({ headline, summary_short, link }) => {
  return (
    <div className="review">
      
      <h3>{headline}</h3>
      <p>{summary_short}</p>
      <a href={link.url}>{link.suggested_link_text}</a>
      <br/><br/>
    </div>
  )
}
 
const MovieReviews = ({ reviews }) => 
  <div className="review-list">
    {reviews.map(Review)}
  </div>


MovieReviews.defaultProps = {
	reviews: []
};

export default MovieReviews; 

