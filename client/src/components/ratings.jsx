import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*
This function should be called in cards table, and should send in an id as props.
This function will take that ID number and send a get request to http://52.26.193.201:3000/reviews/ --ID--/meta, a
*/

function Ratings() {
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

  useEffect(() => {
    axios.get('http://52.26.193.201:3000/reviews/2/meta')
      .then((results) => {
        setRatings(results);
      });
  });

  const getAverage = () => {
    const reviewsObj = ratings.ratings;
    for (const key in reviewsObj) {

    }
  };
  return (
    <p>{getAverage()}</p>
  );
}

export default Ratings;
