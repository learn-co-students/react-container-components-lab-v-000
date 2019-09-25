// Code MovieReviews Here

import React from 'react';


const MovieReviews = (props) => {
  const reviews = props.movies.map((item, key) =>
    <li className='review' key={key}><a href={item.link.url}>{item.display_title}</a>
    {/* <h4>{item.headline}</h4> */}
    {/* <p>{item.summary_short}</p> */}
    </li>
  );
  debugger;
  return(
      <ul className='review-list'>{reviews}</ul>
  );
}

MovieReviews.defaultProps = {
  movies: []
};

export default MovieReviews;
