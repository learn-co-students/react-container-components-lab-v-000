import React from 'react';
import PropTypes from 'prop-types';

const renderReview = ({
  byline,
  display_title, 
  headline,
  multimedia,
  link, 
  summary_short,
  publication_date
}) => {
  return (
    <article className="review">
      <header>
        <a className="review-link" href={link.url}><img src={multimedia.src} alt={byline} /> <br />
        {headline}</a>
      </header>
      <p>Published by {byline} on {publication_date}</p>
      <p>{summary_short}</p>
    </article>
  )
}

const MoviewReviews = ({reviews}) => {
  console.log(reviews);
  return (
    <div className="review-list">
      {reviews.map(renderReview)}
    </div>
  );
}

MoviewReviews.defaultProps = {
  reviews: []
}

MoviewReviews.propTypes = {
  reviews: PropTypes.array
}

export default MoviewReviews;
