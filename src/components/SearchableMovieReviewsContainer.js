import React from 'react';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'c9ce25591f8349ba9f03068ade15038d';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key' + NYT_API_KEY + '&query=';

class SearchableMovieReviewsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            reviews: []
        }
    }

    updateQueryString = (e) =>{
        let text = e.target.value;
        this.setState({
            searchTerm: text
        })
    }
    searchForMovieReviews = (e) =>{
        this.getMovieReviews();
        
    }
    getMovieReviews = () => {
        fetch(URL + this.state.searchTerm)
            .then( response => {
            return response.json()
        })
            .then( result => {
            this.setState({
                reviews: result.results
            })
        })
    }

    render(){
        return (
            <div className="searchable-movie-reviews">
                <input type="text" value={this.state.searchTerm} onChange={this.updateQueryString}></input>
                <button onClick={this.searchForMovieReviews}>Search</button>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
export default SearchableMovieReviewsContainer;