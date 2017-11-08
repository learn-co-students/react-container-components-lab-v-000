import React from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component{
    constructor(){
      super();

      this.state = {
          reviews: [],
          searchTerm: ""
      }
    }
    
    componentWillMount(){
      this.feactLatestReviews()
    }

    feactLatestReviews = () => {
      //do API fetching with this.state.searchTerm 
      //then set this.state.reviews with the new content
   
      this.setState({
          reviews: [
                    {title: 'good', url: 'www.wowsearchterm.com'}, 
                    {title: 'better', url: 'www.wowsearchterm.com'}
                   ],
          searchTerm: "good movies"
      })
    }

    render(){
      return(
        <div className="searchable-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>  
      );
    }
}

export default SearchableMovieReviewsContainer;