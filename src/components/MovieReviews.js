import React from 'react';

const Review = ({ headline, byline, link, summary_short}) => {
    return (
        <div className="review">
	        <a className="review-link" href={link.url}>{headline}</a>
			   	
			    <p>{ byline className='author'}</p>
			   
			    <p>{ summary_short }</p>
			  </div>
    );
};

const MovieReviews = ({ reviews }) => {
    return (
    	<div className="review-list">
    		{ reviews.map(Review) />) }
  		</div>
        
    );
};

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;

