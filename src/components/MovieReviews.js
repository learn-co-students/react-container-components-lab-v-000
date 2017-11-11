import React from 'react';

const Review = ({ display_title, link }) => {
    return (
      <div className="review">
        <h3>{display_title}</h3>
        <a href={link.url}>{link.suggested_link_text}</a>
      </div>
    )
}
   
const MovieReviews = ({ reviews }) => (
    <div className="review-list">
    {
        reviews.map((review) => {
            return(<Review display_title={review.display_title} link={review.link} />);
        })
    }
    </div>
);

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews;
