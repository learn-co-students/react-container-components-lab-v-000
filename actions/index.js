const { fetch } = require('whatwg-fetch'); 

function search(query) {
  var base_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + query;
  var api_key = "9134051fc55f464b899f2a9388df0675"; 
  var search_url = base_url + "api-key=" + api_key; 
  fetch(search_url).then(function(response) {
    return response.json()   
  }).then(function(json) {
  
  }); 
  return; 
}
function getAllReviews() {
  var base_url = "https://api.nytimes.com/svc/movies/v2/reviews/all.json"; 
  var api_key = "9134051fc55f464b899f2a9388df0675"; 
  var search_url = base_url + "api-key=" + api_key; 
  fetch(search_url).then(function(response) {
    response.json();    
  }).then(function(res) {
    return res.results 
  }); 
}

module.exports = {
  search, 
  getAllReviews
}
