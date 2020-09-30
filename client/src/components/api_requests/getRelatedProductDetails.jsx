import axios from 'axios';

const GetRelatedProductDetails = (id) => axios.get(`http://52.26.193.201:3000/products/${id}`)
  .then((results) => results.data)
  .catch((err) => { throw err; });

export default GetRelatedProductDetails;
