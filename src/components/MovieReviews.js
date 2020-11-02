import React from 'react';

const MovieReview = props => <div className="review-list">
    {props.reviews.map(data => <li className="review">{data.display_title}</li>)}
</div>

export default MovieReview