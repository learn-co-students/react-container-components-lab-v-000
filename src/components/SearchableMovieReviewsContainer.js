import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}&query=`

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidUpdate() {
        let searchURL = `${URL}${this.state.searchTerm}`
        fetch(`${searchURL}`)
            .then(response => response.json())
            .then(response => this.setState({reviews: response.result}))
    }

    handleChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    
    render() {
        return (
            <div className="searchable-movie-reviews">
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                {this.state.searchTerm}
                <MovieReviews reviews={this.state.reviews}/>
                
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;