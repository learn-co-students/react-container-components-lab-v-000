import React, { Component } from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`

        fetch(url)
        .then(response =>
        response.json())
        .then(response => {
            if (response.results.length > 0) {
                this.setState({
                    reviews: response.results,
                    searchTerm: ""
                })
            }
        })
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.reviews !== nextState.reviews;
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
            <h1>Search Movie Reviews:</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Movie Title:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div><MovieReviews reviews={this.state.reviews}/></div>
            </div>
        )
    }


}

export default SearchableMovieReviewsContainer;
