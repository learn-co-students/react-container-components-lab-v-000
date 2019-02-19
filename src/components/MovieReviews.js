import React from 'react';

function MovieReviews(props) {
  return (
    <div className="review-list">
      { props.reviews.map((review,i) =>
        <li key={i} className='review'>
          <em><h4><font color='blue'>{review.display_title}</font></h4></em>
          <small>{review.headline}</small>
          </li>
        )}
    </div>
  );
}

export default MovieReviews;
