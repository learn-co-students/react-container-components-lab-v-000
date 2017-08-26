import React, { Component } from 'react';
import 'isomorphic-fetch';

export default class MovieReviews extends Component {

  render() {

    const Review = ({ displayTitle, byline}) => {
      return (
        <div className="review">
          <h1>{displayTitle}</h1>
          <p>{byline}</p>
        </div>
      )
    }

    const ReviewsList = ({ reviews }) => (
      <div>
        {this.props.reviews.map((review, index) => <Review key={index} displayTitle={review.display_title} byline={review.byline} />)}
      </div>
    );

    return <ReviewsList className="review-list" reviews={this.props.reviews} />

  }

}
MovieReviews.defaultProps = {
  reviews: []
};
