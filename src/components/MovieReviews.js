import React from 'react';

const Review = ({
  display_title,
  summary_short,
  link,
  byline
}) => {
  return (
    <div key={display_title} className='review'>
      <header>
        <a className='review-link' href={link.url}>{display_title}</a>
        <h7 className='author'> {byline}</h7>
      </header>
      <p className='summary'>{summary_short}</p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className='review-list'>{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
