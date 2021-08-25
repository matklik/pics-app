import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID R-RmvBbwNqPsgHoFtxKBkJz5_RrzNVz22l7C0mX3nMg'
    }
});