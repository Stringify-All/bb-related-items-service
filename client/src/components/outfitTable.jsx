/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Ratings from './ratings.jsx';
import SimpleModal from './modal.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    spacing: 4,
  },
  title: {
    color: theme.palette.primary.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  card: {
    maxWidth: '300px',
  },
}));

const OutfitTable = (props) => {
  const classes = useStyles();

  const CardRender = () => (
    <>
      <h1>Like something? Add it to your Outfit:</h1>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={200} cols={3}>
          {console.log('heres what were mapping over: ', props.outfitList)}
          {props.outfitList.map((tile, index) => (
            <GridListTile className={classes.card} key={tile.img}>
              {/* {console.log('should be an object: ', props.relatedProducts[index].image)} */}
              <img
                className={classes.cardImg}
                src={props.outfitList[index].image}
                alt={`Img for: ${tile.name}`}
              />
              <GridListTileBar
                title={(
                  <Ratings id={tile.id} />
             )}
                subtitle={(
                  <div>
                    {tile.name}
                    {' '}
                    {tile.category}
                    {' '}
                    $
                    {tile.default_price}
                  </div>
             )}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );

  if (props.outfitList !== []) {
    return CardRender();
  }
  return (
    <div>Add Something to your outfit</div>
  );
};

export default OutfitTable;
