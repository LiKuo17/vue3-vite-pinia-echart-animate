import axios from 'axios'


// const server = axios.create({
//     baseURL:'../../n.json'
// })

export const getApiList = () => axios.get('n.json').then(res=> res.data)

