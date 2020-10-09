import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'koxMHPDoawBp0cTEneUQ1N0upjIweo9q';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            // + `api-key=${NYT_API_KEY}` + `&query=${searchTerm}`;
          
    class SearchableMovieReviewsContainer extends React.Component {
        constructor() {
            super()
        
            this.state = {
            reviews: [],
            searchTerm: ""
            };
        }
        
        componentDidMount() {
            // fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')
            //   .then(response => response.json())
            //   .then(bookData => this.setState({ books: bookData.books }))
        }
        
        render() {
            return (
                <div className="searchable-movie-reviews">
                    {<MovieReviews movies={this.state.reviews} />}
                </div>
            )
        }
    }

export default SearchableMovieReviewsContainer;