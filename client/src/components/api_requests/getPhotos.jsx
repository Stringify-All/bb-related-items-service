import axios from 'axios';
/*
takes in a product ID

returns all styles for that product (also contains photos & sizes)
*/
const GetPhotos = (id) => axios.get(`http://52.26.193.201:3000/products/${id}/styles`)
  .then((results) => results.data)
  .catch((err) => { throw err; });

export default GetPhotos;
