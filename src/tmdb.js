const API_KEY = '85ed73fade8f39768f7900af5260ff1c';
const API_BASE = 'https://api.themoviedb.org/3';


const basicfetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json()
    return json;

}




export default {
    getHomeList: async () => {
           return [
              {
                   slug: 'originals',
                   title: 'Originais Netflix',
                   items:   await basicfetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
              },
              {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicfetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
              },
              {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicfetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
             },
             {
                slug: 'Action',
                title: 'Ação',
                items: await basicfetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
             },
             {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicfetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
           },
              {
            slug: 'horror',
            title: 'Terror',
            items: await basicfetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
              },
              {
                slug: 'romance',
                title: 'Romance',
                items: await basicfetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
           },
           {
            slug: 'documentary',
            title: 'Documentario',
            items: await basicfetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
       },
           ];

    },
    getMovieInfo:  async (movieId , type) => {
       let info = {};

        if(movieId) {

          switch(type) {

            case 'movie':
               info = await basicfetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

            break;

            case 'tv':
              info = await basicfetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);


            break;

            default:
              info = null;
              break;


          }
        }

         return info;

    }


}