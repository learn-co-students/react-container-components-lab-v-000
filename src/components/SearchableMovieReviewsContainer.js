// Code SearchableMovieReviewsContainer Here
import React from "react";

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
