// Code MovieReviews Here

const Review = ({headline, summary, url}) => {
  return(
    <div className='review'>
      <a href={url}><h3>{headline}</h3></a>
      <p>{summary}</p>
    </div>
  );
}

const MovieReviews = ({reviews}) => {
  return(
    <div className='review-list'>
      {reviews.map(review => <Review headline="review.headline" summary="review.summary" url="review.url" />)}
    </div>
  );
}
