
import React from 'react'

const Review = ({byline, headline, summary_short}) => {
    return (
        <div key={headline} className="review">
            <h3>{headline}</h3>
            <span><strong>Author:</strong> {byline}</span>
            <br/>
            <h4 htmlFor="">Summary:</h4>
            <blockquote>{summary_short}</blockquote>
            <br/><br/>
        </div>
    )  
}



    
        
    


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
reviews: []
};

export default MovieReviews
