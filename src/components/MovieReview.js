import React from 'react';

const MovieReview = ({ headline, displayTitle }) => {
  return (
    <h1 key={headline}>{displayTitle}</h1>
  )
}

export default MovieReview;
