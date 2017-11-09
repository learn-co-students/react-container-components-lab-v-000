import React from 'react';

const MovieReviews = props => {
    return (
        <div className="review-list">
            <ul>
                {props.reviews.map(review => 
                    <li className="review">
                        {review.display_title}
                    </li>
                )}
            </ul>
           
        </div>
    )
    
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews;