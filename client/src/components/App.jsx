/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GlobalStyle from './globalStyle.js';
import CardsTable from './cardsTable.jsx';
import OutfitTable from './outfitTable.jsx';
import GetProductList from './api_requests/productsList.jsx';
import GetRelatedProducts from './api_requests/getRelatedProducts.jsx';
import GetRelatedProductDetails from './api_requests/getRelatedProductDetails.jsx';
import GetPhotos from './api_requests/getPhotos.jsx';

const RelatedItems = () => {
  const [count, setCount] = useState(0);
  // const [productInfo, setProductInfo] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);
  const [relatedProductsPhotos, setRelatedProductPhotos] = useState([]);
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);

  const outfitArray = [];
  const [outfitList, setOutfitList] = useState([]);

  const currentId = 3;
  // gets details for related products
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

  // gets info for the selected item
  useEffect(() => {
    GetRelatedProductDetails(currentId)
      .then((data) => {
        setSelectedProductDetails(data);
      });
  }, []);

  // gets pictures for related products
  useEffect(() => {
    GetRelatedProducts(currentId)
      .then((data) => {
        setRelatedProducts(data);
        return data;
      })
      .then((data) => {
        const photosPromiseArr = data.map((id) => GetPhotos(id));
        return Promise.all(photosPromiseArr);
      }).then((data) => {
        // console.log('here is the data in App.jsx: ', data);
        setRelatedProductPhotos(data);
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
        <CardsTable relatedProducts={relatedProductsInfo} relatedPhotos={relatedProductsPhotos} selectedProductDetails={selectedProductDetails} outfitArray={outfitArray} setOutfitList={setOutfitList} />
        <OutfitTable outfitList={outfitList} />
      </body>
    </>
  );
};

export default RelatedItems;
