import React from 'react';
import MovieReviews from './MovieReviews';


const NYT_API_KEY = '8db7ccbeda7b4b5e9686f949293e2c30';

var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";



class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
      super();

      this.state = {
        searchTerm: "",
        reviews: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }


    handleChange(event) {
       this.setState({searchTerm: event.target.value});
     }

     handleClick(event){
       this.componentWillMount()
       console.log(this.state.reviews.length)
     }

     componentWillMount() {
       url += '?api-key=' + NYT_API_KEY + '&query=' + this.state.searchTerm


         fetch(url)
           .then(response => response.json())
           .then(reviews => {
             var arrayOfReviews = reviews["results"]
             this.setState({ reviews: arrayOfReviews })})
       }


      render() {
          return (
            <div className="searchable-movie-reviews">
                    <h3>Type in a Search Term</h3>
                    <h2>You can also just hit search to return all results</h2>
                    <div className="field">
                      <input value={this.state.searchTerm} onChange={this.handleChange} name="query" id="query">
                      </input>
                    </div>

                    <div className="field">
                      <button className="ui button" onClick={this.handleClick}>Search</button>
                    </div>
                    <MovieReviews reviews={this.state.reviews} />


            </div>
          )
        }

}




export default SearchableMovieReviewsContainer;
// Code SearchableMovieReviewsContainer Here
