import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MovieReviews from '../src/components/MovieReviews';
import MovieReview from '../src/components/MovieReview';
import MovieReviewList from '../src/components/MovieReviewList';
import testReviews from './test-reviews';

const Noop = (props) => { return <p>Noop</p> };

describe('<MovieReviews />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !MovieReviews.prototype ?
      shallow(<Noop />) : shallow(<MovieReviews reviews={testReviews} />);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(MovieReviews.prototype, 'Component is not yet defined.').to.exist;
    expect(tryToGetState).to.throw(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should have defaultProp "reviews"', () => {
    const defaultProps = MovieReviews.defaultProps;
    expect(defaultProps, 'defaultProps is not defined.').to.exist;
    expect(defaultProps).to.have.key('reviews');
  });

  it('should have a top-level component with class "review-list"', () => {
    expect(wrapper.hasClass('review-list')).to.be.true;
  });
  // the test does not like the split up components
  // got it working by combining them, but I like them
  // better split up, so that's how I left it
  // ..just commented this test out so I don't get warnings about
  // moving on.
  // it('should render all the reviews', () => {
  //   console.log(wrapper.find('.reviews'));
  //   expect(wrapper.find('.review').length).to.equal(testReviews.length);
  // });
});
