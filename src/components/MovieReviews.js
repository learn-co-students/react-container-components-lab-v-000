// Code MovieReviews Here
import React from 'react';

// class MovieReviews extends React.Component {
    
        
//     render() {
//       return (
//             <div className='review-list'>
//                 {this.props.reviews.map(review => <div className='review' title="review.title" img_url="review.image_url" />)}  
//             </div>
               
//             )
//     }
// }

// const Book = ({ title, img_url }) => {
//   return (
//     <div className="book">
//       <img src={img_url} />
//       <h3>{title}</h3>
//     </div>
//   )
// }

// const Review = ({headline, url}) => {
//     return (
//         <div>
//             {headline}
//             {url}
//         </div>
//     )
// }



const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        {reviews.map(review => (
            <div className='review' >
                <h1>{review.headline}</h1>
                <p>{review.url} </p>
            </div>
            )
        
        )}
    </div>
)
    
MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews;





