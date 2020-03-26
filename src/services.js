import axios from 'axios';
const BASE_URL = 'https://rails-backend-api-react.herokuapp.com/api'

export default {
    getAllPosts: () =>
        axios.post(`${BASE_URL}/posts/`)
}