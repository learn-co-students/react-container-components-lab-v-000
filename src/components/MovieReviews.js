const MovieReviews = props => {
  (
    <ul className="review-list">
      {props.reviews.map(review => <li className="review">review</li>)}
    </ul>
  )
}
