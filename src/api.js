
const apiKey = 'a3427ea1a39deda248c785f84eefce61'

const endPoints = {
  config: `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`,
  movies: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-UK&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`
}

export default endPoints
