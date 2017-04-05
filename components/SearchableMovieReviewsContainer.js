const React = require('react');
const { Component } = require('react');
const { fetch } = require('whatwg-fetch');

const SearchInput = require('./SearchInput');
const MovieReviews = require('./MovieReviews');

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

}

module.exports = SearchableMovieReviewsContainer;
