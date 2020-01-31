import axios from 'axios'

// Custom Axios Instances in Local Axios
const instance = axios.create({
    baseURL: 'https://vuejs2-axios.firebaseio.com/'
})

// Apply into Local instance
instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance