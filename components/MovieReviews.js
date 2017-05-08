'use strict'

import React from 'react';

const renderReview = ({
  headline,
  byline,
  link,
  summary_short
}) => (
  <div key={headline} className="review">
    <header>
      <a href={link.url}>
        {headline}
      </a>
      <br/>
      {byline}
    </header>
    <p>{summary_short}</p>
  </div>
)

const MovieReviews = ({reviews}) => (
  <div className='review-list'>
    {reviews.map(renderReview)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

module.exports = MovieReviews;







// 'use strict'
//
// import React from 'react';
//
// const SearchResults = ({ results }) => (
//   <ul className='search-results'>
//     {
//       results.map(({title, description, link}, i) => (
//         <li key={i}>
//           <a href={link}>{title}</a>
//           <p>{description}</p>
//         </li>
//       ))
//     }
//   </ul>
// );
//
// export default SearchResults;
