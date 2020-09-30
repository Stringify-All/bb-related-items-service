import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetPhotos = (props) => {
  const [photos, setPhotos] = useState('');

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/products/${props}/styles`)
      .then((response) => {
        console.log('here are the results', response.data.results);
        setPhotos(response.data.results);
      });
  }, []);

  if (photos !== '' || photos === null) {
    return (
      photos
    );
  }
  return (
    photos
  );
};

export default GetPhotos;
