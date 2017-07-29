import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import PropTypes from 'prop-types';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}?query=`;

const searchTerm = ({ 
    label,
    handleChange,
    handleSubmit
    
}) => {
    return (
        <form onSubmit={ this.handleSubmit }>
            <label for='search-input'>{ label }</label>
            <input name='search-input' type='text' onChange={ this.handleChange }/>
            <input type='submit'/>
        </form>
    );
};

class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super();
        
        this.state ={
            searchTerm: '',
            reviews: []   
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            searchTerm: e.target.value
        });
    }
    
    handleSubmit(e){
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(resp => this.setState({
            reviews: resp.results
        }));
    }
    
    render(){
        return(
            <div className='searchable-movie-reviews'>
                <searchTerm 
                    label= 'search'
                    handleSubmit={ this.handleSubmit }
                    handleChange={ this.handleChange }
                />
                <MovieReviews reviews={ this.state.reviews } />
            </div>
        );
    }
}

searchTerm.defaultProps = {
    label: 'Search'
};

searchTerm.propTypes ={
    handleChange: React.PropTypes.func,
    handleSubmit: React.PropTypes.func
};

export default SearchableMovieReviewsContainer;