import React from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();
    this.state={
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch(URL).then(res => res.json())
    .then(reviews => {
      this.setState({reviews: reviews.results})
    })
  }


  render(){


    return (

      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
