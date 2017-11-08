import React from 'react';
import MovieReviews from './MovieReviews';

class LatestMovieReviewsContainer extends React.Component{
    constructor(){
      super();

      this.state = {
          reviews: []
      }
    }
    
    componentWillMount(){
      this.feactLatestReviews()
    }

    feactLatestReviews = () => {
      //do fetching then set the state with the new content




      this.setState({
        reviews: [
                  {title: 'wow', url: 'www.wow.com'},
                  {title: 'not good', url: 'www.wow.com'}
                 ]
      })
    }

    render(){
      return(
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>  
      );
    }
}

export default LatestMovieReviewsContainer;