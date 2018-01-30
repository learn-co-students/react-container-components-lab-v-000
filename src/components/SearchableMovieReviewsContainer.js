import React, { Component } from 'react';
class SearchableMovieReviewsContainer extends React.Component {
    constructor() {
        super();
     
        this.state = {
          reviews: [],
          searchTerm: ''
        };
    }
}

export default SearchableMovieReviewsContainer;