import axios from 'axios'

const config = {
    baseURL: 'https://fakestoreapi.com/'
}

export default axios.create(config)