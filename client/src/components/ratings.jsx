import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
/*
This function should be called in cards table, and should send in an id as props.
This function will take that ID number and send a get request to http://52.26.193.201:3000/reviews/ --ID--/meta, a
*/

function Ratings(props) {
  const [ratings, setRatings] = useState({});

  // getAverage is designed to take in the ratings object returned from the above API call

  useEffect(() => {
    axios.get(`http://52.26.193.201:3000/reviews/${props.id}/meta`)
      .then((results) => {
        setRatings(results.data);
      });
  }, []);

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

  if (ratings.ratings !== undefined && Object.keys(ratings.ratings).length > 0) {
    return (
      <div>
        <Box component="fieldset" mb={2} borderColor="transparent">
          <Rating
            name="read-only"
            value={getAverage(ratings.ratings)}
            readOnly
          />
        </Box>
      </div>
    );
  }
  return (
    <div>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography>No Ratings data</Typography>
      </Box>
    </div>
  );
}

export default Ratings;

/*

<Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
*/
