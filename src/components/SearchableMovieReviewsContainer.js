// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const API_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${NYT_API_KEY}&query=`;

function urlForSearch(term) {
    return `${API_URL}${term}`
}

const SearchingWidget = ({searchTerm}) => (
    <p>
        {searchTerm ?
            'Searching for ' + searchTerm
            : ''}
    </p>
);
/**
 * Make an api call for movie reviews
 * @param {string} searchTerm term to search for
 */
function apiSearch(searchTerm) {
    return fetch(urlForSearch(searchTerm))
        .then(results => results.json())
}

class SearchableMovieReviewsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: [],
            searchTerm: ''
        };
    }

    // API call with search terms 
    fetchResults(searchTerm) {
        apiSearch(searchTerm)
            .then(reviews => {
                this.setState({ reviews: reviews.results })
            })
    }

    //User submits search term, app should re-render
    updateReviews(searchTerm) {
        this.setState({
            searchTerm,
            reviews: []
        });
        this.fetchResults(searchTerm);
    }

    render() {
        let searchWidget = '';
        let reviewsWidget =  '';
        if (this.state.searchTerm && this.state.reviews.length === 0) {
            searchWidget = <SearchingWidget searchTerm={this.state.searchTerm} />
        }
        else if (this.state.reviews.length > 0) {
            reviewsWidget = (
            <div>
                <h1>Reviews matching your search term: </h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            );
        }
        return (
            <div className="searchable-movie-reviews">
                Search reviews: <input id="searchTerm" type="text" />
                <input type="submit" onClick={evt => {
                    let searchTerm = document.getElementById('searchTerm').value;
                    this.updateReviews(searchTerm.trim());
                }} />
                {searchWidget}
                {reviewsWidget}
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;
