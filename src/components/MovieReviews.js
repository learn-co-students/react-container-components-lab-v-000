// Code MovieReviews Here

import React from 'react';
const review_list__container = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
}

const review_list__review = {
        maxWidth: 250,
        border: '2px solid teal',
        borderRadius: 10,
        boxSizing: 'border-box',
        margin: 15,
        padding: '0 15px',
}

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
      style={review_list__review}
    >
      <header>
        <a
          className="review-link"

          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div style={review_list__container} className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};



export default MovieReviews;


////////////////////////////////////////////////////////////
// FOR SOME REASON WILL NOT PASS TESTS FUNCTIONS AS EXPECTED
// WILL NOT!! PASS MOVIEREVIEWS TEST (4)
////////////////////////////////////////////////////////////

// const Review = ({ reviews }) => {
//   const {headline, byline} = reviews;
//   return(
//     <div className='review' style={review_list__review}>
//       <h2>{headline}</h2>
//       <h4>By: {byline}</h4>
//     </div>
//   )
// }
//
// const MovieReviews = ({ reviews }) => (
//   <div className="review-list" style={review_list__container}>
//     {reviews.map((review, index) => <Review key={review.headline} reviews={review} />)}
//   </div>
// );
//
//
// MovieReviews.defaultProps = {
//   reviews: ''
// }
