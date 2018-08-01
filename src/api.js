import axios from 'axios'

const apiKey = 'a3427ea1a39deda248c785f84eefce61'

const endPoints = {
  configEndpoint: `https://api.themoviedb.org/3/configuration?api_key=${apiKey}`,
  movieEndpoint: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-UK&sort_by=popularity.desc&include_adult=true&include_video=false&page=1`
}
const retrieveBaseUrl = () => {
  axios.get(endPoints.configEndpoint)
    .then((response) => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}

// export {
//   configEndpoint,
//   movieEndpoint
// }
