import React from 'react';
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchableMovieReviewsContainer from '../src/components/SearchableMovieReviewsContainer';
import testReviews from './test-reviews';

import { spy, stub, useFakeTimers } from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

const Noop = (props) => { return <p>Noop</p> };

describe('<SearchableMovieReviewsContainer />', () => {
  let wrapper;
  let fetchSpy;

  beforeEach(() => {
    global.fetch = require('node-fetch')

    fetchSpy = spy(global, "fetch")

    wrapper = !SearchableMovieReviewsContainer.prototype ?
      shallow(<Noop />) : shallow(<SearchableMovieReviewsContainer />);
  });


});
