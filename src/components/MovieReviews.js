import React from 'react';

const MovieReviews = ({ reviews }) =>{
    const children = reviews.map((review) => {
        return(<p className="review">{review.title}</p>);
    }) 
    
    return(
        <div className="review-list">
            {children}
        </div>    
    ); 
} 

// const Review = ({ title, url }) => {
//     return (
//       <div className="review">
//         <a href={url} >{url}</a>
//         <h3>{title}</h3>
//       </div>
//     )
// }
   
// const MovieReviews = ({ reviews }) => (
//     <div className="review-list">
//       {reviews.map(review => <Review title={review.title} url={review.url} />)}
//     </div>
// );

MovieReviews.defaultProps = {
    reviews: []
}
export default MovieReviews;

