import React from 'react';

const Review = ({ headline, byline, summary_short, link }) => {
  return (
    <div key={headline} className='review'>
      <a href={link.url} className='review-link'>{headline}</a>
      <div className='author'>
        {byline}
      </div>
      <div>
        <p>
          {summary_short}
        </p>
      </div>
    </div>
  );
};


const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    {reviews.map(Review)}
  </div>
);

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews

