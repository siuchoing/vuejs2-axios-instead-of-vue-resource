import axios from 'axios'

// Custom Axios Instances in Local Axios
const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts'
})


// Apply into Local instance
// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance