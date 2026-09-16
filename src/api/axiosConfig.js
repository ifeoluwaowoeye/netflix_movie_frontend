import axios from 'axios';

export default axios.create({
    baseURL:'http://3.135.183.105:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
