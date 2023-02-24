import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://localhost:4200',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    }
});
export default Axios;