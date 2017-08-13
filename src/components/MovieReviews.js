import React from 'react';



const renderReview = ({ 
	headline, 
	display_title, 
	link, 
	byline, 
	summary_short 
}) => {
  return (
    <div className="review">      
      <h1>{headline}</h1>
      <h2><a href={link.url}>{display_title}</a></h2>
      <h3>{byline}</h3>
      <p>{summary_short}</p>
    </div>
  )
}
 
const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map(renderReview)}
  </div>
};

MovieReviews.defaultProps = {
  reviews: []
};



export default MovieReviews

