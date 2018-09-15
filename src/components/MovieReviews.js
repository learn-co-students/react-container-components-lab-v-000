// Code MovieReviews Here
const Review = ({ display_title, summary_short}) => (
  <div className="review">
    <h4>{ display_title }</h4>
    <p>{ summary_short }</p>
  </div>
)

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    { reviews.map(review => <Review display_title={review.display_title} summary_short={book.summary_short} />) }
  </div>
)
