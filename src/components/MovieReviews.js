import React from "react";

const Review = ({headline, summary, url}) => {
  return(
    <div className='review'>
      <a href={url}><h3>{headline}</h3></a>
      <p>{summary}</p>
    </div>
  );
}

class MovieReviews extends React.Component{
  render(){
    return(
      <div className='review-list'>
        {this.props.reviews.map(review => <Review headline="review.headline" summary="review.summary" url="review.url" />)}
      </div>
    );
  }
}

export default MovieReviews;
