import { NYTKEY } from '../secrets'
import 'isomorphic-fetch';
export default class NytApiManager{

    constructor(type='movie'){
        switch(type){
            case 'movie':
                this.baseUrl = 'https://api.nytimes.com/svc/movies/v2/'
                break
            default:
                throw Error("Not a supported type")
        }
        this.key = NYTKEY
    }

    get movieReviewsUrl(){
        return this.addApiKey(`${this.baseUrl}reviews/all.json`)
    }

    get movieReviewSearchUrl(){
        return this.addApiKey(`${this.baseUrl}reviews/search.json?query=${this.movieReviewQuery}`)
    }

    isWithoutQuery(url){
        return url.slice(-4) === 'json'
    }

    addApiKey(url){
        return this.isWithoutQuery(url) ? `${url}?api-key=${this.key}` : `${url}&api-key=${this.key}`
    }

    // async getMovieReviews(){
    //     try{
    //         const res = await fetch(this.movieReviewsUrl)
    //         if(!res.ok) throw res.statusText
    //         return await res.json()
    //     }catch(e){
    //         alert(e)
    //     }
    // }

    fetchMovieReviews(){
        return fetch(this.movieReviewsUrl)
    }


    // async searchMovieReivews(query){
    //     try{
    //         this.movieReviewQuery = query
    //         const res = await fetch(this.movieReviewSearchUrl)
    //         if(!res.ok) throw res.statusText
    //         return await res.json()
    //     }catch(e){
    //         alert(e)
    //     }
        
    // }

    fetchMovieReviewsSearch(query){
        this.movieReviewQuery = query
        return fetch(this.movieReviewSearchUrl)
    }
}