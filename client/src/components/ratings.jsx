import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
This function should be called in cards table, and should send in an id as props.
This function will take that ID number and send a get request to http://52.26.193.201:3000/reviews/ --ID--/meta, a
*/

function Ratings(props) {
  const [ratings, setRatings] = useState({});

  // getAverage is designed to take in the ratings object returned from the above API call
  /*

do conditional render here
*/
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${props.id}/meta`)
      .then((results) => {
        console.log('ratings being returned from the API: ', results.data, 'corresponding ID: ', props.id);
        setRatings(results.data);
      });
  }, []);

  const getAverage = (obj) => {
    console.log('object in the getAvg funciton: ', obj);
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const reducer = (a, b) => a + b;
    const valSum = values.reduce(reducer);
    let total = 0;
    for (let i = 0; i < keys.length; i += 1) {
      total += Number(keys[i]) * values[i];
    }
    return Math.round(total / valSum);
  };
  if (ratings.ratings !== undefined && Object.keys(ratings.ratings).length > 0) {
    return (
      <p>{getAverage(ratings.ratings)}</p>
    );
  }
  return (
    <div>No ratings available</div>
  );
}

export default Ratings;
