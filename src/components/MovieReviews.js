import React from 'react';

const Review = ({title, critics_pick, headline, summary_short}) => {
  return (
    <div className="review">
      <h3>{title} - {critics_pick}</h3>
      <h4>{headline}</h4>
      <p>{summary_short}</p>
    </div>
  )
}

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
)

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews

// export default class MovieReviews extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     return (
//       <div className="review-list">
//           {this.props.reviews.map(review =>
//             <div className="review" id={review.title}>
//               <h3>{review.title} - {review.critics_pick}</h3>
//               <h4>{review.headline}</h4>
//               <p>{review.summary}</p>
//             </div>
//           )}
//       </div>
//     )
//   }
// }
//
// MovieReviews.defaultProps = {
//   reviews: []
// };
