const API_KEY = process.env.REACT_APP_APIKEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchKdrama: `/discover/movie?api_key=${API_KEY}&with_genres=10762`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchShows: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    
};

export default requests;