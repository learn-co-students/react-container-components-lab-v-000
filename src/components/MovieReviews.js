// Code MovieReviews Here

import React from 'react';


const MovieReviews = (props) => {
  const reviews = props.movies.map((item, key) =>
    <li className="review" key={key}>{item.display_title}</li>
  );
  return(
    <div className='review-list'>
      <ul>{reviews}</ul>
    </div>
  );
}

export default MovieReviews;
