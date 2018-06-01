import React from 'react';

export default class MovieReviews extends React.Component {

  render() {
    return <ul className='review-list'>
         {this.props.reviews.map(r => <li className='review' key={r.display_title}> {r.display_title}</li>)}
      </ul>
  }
}

MovieReviews.defaultProps = {
  reviews: []
};
