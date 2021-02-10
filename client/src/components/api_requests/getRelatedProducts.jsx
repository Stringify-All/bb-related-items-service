import axios from 'axios';
/*
 takes in one ID

 returns an array of IDs
 */
const GetRelatedProducts = (id) => axios.get(`http://52.26.193.201:3000/products/${id}/related`)
  .then((results) => results.data)
  .catch((err) => { throw err; });

export default GetRelatedProducts;
