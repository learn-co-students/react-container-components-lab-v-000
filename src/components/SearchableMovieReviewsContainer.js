// Code SearchableMovieReviewsContainer Here
import React from "react";
import 'isomorphic-fetch';
import Review from './MovieReviews'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      reviews: "",
      searchTerm: ""
    }
  }

  render(){
    return(

      <div className="searchable-movie-reviews">
        <form>
          <input type="text" placeholder="Search Reviews"/>
          <input type="submit"  />
        </form>
      </div>
    )
  }


}

export default SearchableMovieReviewsContainer;
