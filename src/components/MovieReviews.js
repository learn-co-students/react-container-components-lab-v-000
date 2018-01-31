import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short,
  date_updated,
  critics_pick
}) => {
  return (

    <div key={headline} className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
        <span className="last-updated">{date_updated}</span>
        <span className="critics_pick">{critics_pick}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};



export default MovieReviews;
