import axios from 'axios';

const GetProductList = () => axios.get('http://52.26.193.201:3000/products/list')
  .then((results) => results.data)
  .catch((err) => { throw err; });

export default GetProductList;
