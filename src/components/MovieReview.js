import React from 'react';

const MovieReview = ({ display_title, byline, summary_short }) => {
  return(
    <div  className="review" >
      <p>{display_title}</p>
      <p>{byline}</p>
      <p>{summary_short}</p>
    </div>
  );
}

export default MovieReview;
