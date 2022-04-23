import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3030'
});

export const login = (walletHash) => API.post('/user/login', { hash_id: walletHash });
export const comment = (value, id) => API.post(`/tipoff/${id}/comment`, { value });
// export const user = (hash_id) => API.