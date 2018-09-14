import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
          state = { 
            reviews: [], 
            searchTerm: '' 
        };


    handleSubmit(e){
        e.preventDefault()
        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(results => results.json())
        .then(reviews => {
            let reviewsWithId = reviews.results.map((review, i) => {
                return  {...review, id: i}
            })
            this.setState({reviews: reviewsWithId})
        })
     }

    listResults(){
        return this.state.reviews.map(movie => {
            return (
               
                    <div key={movie.id} className='review'>
                        <h3>{movie.display_title}</h3> 
                        {movie.summary_short}
                    </div>
                
                )
            })
        // }   
          
    }

    handleChange(e){
        this.setState({searchTerm: e.target.value})
    }

    render() {
        let movieReviews;
        if (this.state.reviews.length > 0 ){
            movieReviews = this.listResults()
        }
        return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <input onChange={this.handleChange.bind(this)} type="text" placeholder="Search Movies"/>
                        <input type="submit"/>
                    </form>
                        { this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2> }
                        <MovieReviews  searchedMovieReviews={movieReviews} />    
                </div>
        );
    }
}

export default SearchableMovieReviewsContainer;