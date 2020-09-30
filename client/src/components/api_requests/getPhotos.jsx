import axios from 'axios';

const GetPhotos = (id) => axios.get(`http://52.26.193.201:3000/products/${id}/styles`)
  .then((results) => results.data)
  .catch((err) => { throw err; });

export default GetPhotos;
