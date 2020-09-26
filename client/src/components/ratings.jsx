import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
This function should be called in cards table, and should send in an id as props.
This function will take that ID number and send a get request to http://52.26.193.201:3000/reviews/ --ID--/meta, a
*/

function Ratings(props) {
  console.log(props.id)
  const [ratings, setRatings] = useState(
    {
      product_id: '2',
      ratings: {
        1: 5,
        2: 5,
        3: 5,
        4: 5,
        5: 5,
      },
      recommended: {
        0: 13,
        1: 23,
        null: 1,
      },
      characteristics: {
        Quality: {
          id: 5,
          value: '4.1000',
        },
      },
    },
  );

  const getAverage = (obj) => {
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
  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/2/meta`)
      .then((results) => {
        setRatings(results.data);
      });
  }, []);
  // getAverage is designed to take in the ratings object returned from the above API call
  return (
    <p>{getAverage(ratings.ratings)}</p>
  );
}

export default Ratings;
