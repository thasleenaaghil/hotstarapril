import axios from "axios"



const movieBaseUrl ="https://api.themoviedb.org/3"
const api_key='468d66c42b2f134e3aa4530e14116dd5'
//https://api.themoviedb.org/3/trending/movie/day?api_key=468d66c42b2f134e3aa4530e14116dd5 - trending
const getTrendingVideos =axios.get(movieBaseUrl+'/trending/all/day?api_key='+api_key);
//https://api.themoviedb.org/3/movie/popular?api_key=468d66c42b2f134e3aa4530e14116dd5 -popular
const getmoviesbyPopular = axios.get(movieBaseUrl+'/movie/popular?api_key='+api_key)
//https://api.themoviedb.org/3/genre/movie/list?api_key=468d66c42b2f134e3aa4530e14116dd5-genre
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=468d66c42b2f134e3aa4530e14116dd5';
//https://api.themoviedb.org/3/discover/movie?api_key=468d66c42b2f134e3aa4530e14116dd5&with_genres
const getmoviesbygenre=(id) => axios.get("https://api.themoviedb.org/3/discover/movie?api_key=468d66c42b2f134e3aa4530e14116dd5&with_genres="+id)


export default{
    getTrendingVideos,
    getmoviesbyPopular,
    getmoviesbygenre
}