import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xhpc2iiwh9zxhJS1KUdMvk2yXHjWXRp3';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch(URL.concat(this.state.searchTerm))
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(data => {
            // console.log(data.results);
            this.setState({
                reviews: data.results
            }, ()=>{console.log(this.state.reviews)})
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                <label>Search for a Movie Review:
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} />
                </label>
                <button>Search</button>
                </form>
                <br/>
                {this.state.reviews !== '' ?
                    (<h4>Search Results:</h4> && <MovieReviews reviews={this.state.reviews} />) : null}
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer