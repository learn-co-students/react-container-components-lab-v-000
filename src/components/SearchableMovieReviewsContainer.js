
// Code SearchableMovieReviewsContainer Here
import React from 'react'
import 'isomorphic-fetch'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends React.Component {    
        constructor() {
            super()
            this.state = {
                searchTerm: "",
                reviews: []    
            }
        }

        inputChange = (event) => {
            this.setState({ searchTerm: event.target.value })
        }

        formSubmit = (event) => {
        event.preventDefault();
        fetch(URL + "&query=" + this.state.searchTerm)
            .then(response => response.json())
            .then(response => {
                this.setState({ 
                    reviews: response.results 
                })
            })
        }

        render(){
            return (
                <div className="searchable-movie-reviews">
                    <form onSubmit={this.formSubmit}>
                        <input type="text" onChange={this.inputChange} />
                        <input type="submit" value="Submit" />
                    </form>
                    <h3>Reviews:</h3>
                    <MovieReviews reviews={this.state.reviews} />
                </div>

            )
        }
    }