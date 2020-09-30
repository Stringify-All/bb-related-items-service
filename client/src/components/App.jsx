/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './globalStyle.js';
import CardsTable from './cardsTable.jsx';
import GetProductList from './api_requests/productsList.jsx';
import GetRelatedProducts from './api_requests/getRelatedProducts.jsx';
import GetRelatedProductDetails from './api_requests/getRelatedProductDetails.jsx';

const RelatedItems = () => {
  const [count, setCount] = useState(0);
  const [productInfo, setProductInfo] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);

  const currentId = 1;

  useEffect(() => {
    GetRelatedProducts(currentId)
      .then((data) => {
        setRelatedProducts(data);
        return data;
      })
      .then((data) => {
        const promiseArr = data.map((id) => GetRelatedProductDetails(id));
        return Promise.all(promiseArr);
      }).then((data) => {
        setRelatedProductsInfo(data);
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <body>
        <h1>Welcome to the Dangerzone.</h1>
        <p> Long Live the Scrumdog Millionaires </p>
        <p>
          {`You clicked ${count} times.`}
        </p>
        <button onClick={() => setCount(count + 1)} type="submit">Dangerous Button</button>
        <CardsTable relatedProducts={relatedProductsInfo} setRelatedInfo={setRelatedProductsInfo} />
      </body>
    </>
  );
};

export default RelatedItems;
