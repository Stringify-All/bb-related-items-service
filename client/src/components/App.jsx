/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import '../App.css';
import CardsTable from './cardsTable.jsx';
import OutfitTable from './outfitTable.jsx';
import GetRelatedProducts from './api_requests/getRelatedProducts.jsx';
import GetRelatedProductDetails from './api_requests/getRelatedProductDetails.jsx';
import GetPhotos from './api_requests/getPhotos.jsx';
/*
Main component, holding all state here. Most of the useState consts below keep track of data sent to each respective endpoint in the api_requests folder

Basic flow: useEffect

*/
const RelatedItems = () => {
  const [count, setCount] = useState(0);
  // const [productInfo, setProductInfo] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsInfo, setRelatedProductsInfo] = useState([]);
  const [relatedProductsPhotos, setRelatedProductPhotos] = useState([]);
  const [selectedProductDetails, setSelectedProductDetails] = useState([]);

  const outfitArray = [];
  const [outfitList, setOutfitList] = useState([
    {
      image: ['https://lh3.googleusercontent.com/proxy/1XZ5LPpBHOS49SjsUog68KlMGKLpXpeybKvUNkdEtfS-n5kYhI2TI0IOxwLBGs9P80sdClUrz2GidmkMOwvglcS9ZOV8s2pItV2aX8-rzA116lYZbG11xuDwi-jszIPUWo41kWiot-DZcLQ3vEE'],
      name: 'Add Items Here!',
    },
  ]);

  // hard coded product ID to get related items for
  const currentId = 4;
  // useEffect (lifecycle method) fires on mount

  // returns an array of product IDs
  useEffect(() => {
    GetRelatedProducts(currentId)
      .then((data) => {
        // records the product IDs in state
        setRelatedProducts(data);
        return data;
      })
      .then((data) => {
        // mapping over the array of IDs and making a request for product details
        const promiseArr = data.map((id) => GetRelatedProductDetails(id));
        // promise.all takes in an array of promises and resolves into a normal array once data is returned
        return Promise.all(promiseArr);
      }).then((data) => {
        setRelatedProductsInfo(data);
      });
  }, []);

  // gets info for the selected item or hardcoded ID (used for modal comparision)
  useEffect(() => {
    GetRelatedProductDetails(currentId)
      .then((data) => {
        setSelectedProductDetails(data);
      });
  }, []);

  // gets pictures for related products (could be combined with first useEffect)
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
    <div>
      <body className="ri-body">
        <h1>Related Items: </h1>
        <CardsTable relatedProducts={relatedProductsInfo} relatedPhotos={relatedProductsPhotos} selectedProductDetails={selectedProductDetails} outfitArray={outfitArray} setOutfitList={setOutfitList} outfitList={outfitList} />
        <OutfitTable outfitList={outfitList} />
        <p>
          {`You clicked ${count} times.`}
        </p>
        <button className="ri-button" onClick={() => setCount(count + 1)} type="submit">Dangerous Button</button>
      </body>
    </div>
  );
};

export default RelatedItems;
