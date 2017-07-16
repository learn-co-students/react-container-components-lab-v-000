// Code SearchableSearchableMovieReviewsContainerContainer Here

import React from 'react';

const NYT_API_KEY = 'e4407b9b99bf49dca641270c478891f3';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + this.state.searchTerm
//             + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      reviews: [],
      searchTerm: null
    };
  }

  fetchNews = () => {
    // fetch(URL)
    //   .then(function(response) {
    //     if (response.status >= 400) {
    //       throw new Error("Bad response from server");
    //     }
    //     return response.json();
    //   })
  }

  
  render() {
    

    return (
      <div className="searchable-movie-reviews"></div>
    );
  }
}

export default SearchableMovieReviewsContainer;