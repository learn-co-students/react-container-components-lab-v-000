// Code MovieReviews Here

import React from 'react';

const renderReview = ({display_title, headline,  byline, summary_short, link})   => {
	return(<div className="review">
				<h1 className="title">{display_title}</h1>
				<a className="headline" href={link}>{headline}</a>
				<span className="author">{byline}</span>
				<p className="summary">{summary_short}</p>
		   </div>
	);	
}

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    		{reviews.map(renderReview)}
 		 </div>
}


MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;



