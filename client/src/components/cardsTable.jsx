/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const CardsTable = (props) => {
  const classes = useStyles();
  const [modalIsOpen, setModal] = useState(false);

  if (props.relatedPhotos.length > 0) {
    for (let i = 0; i < props.relatedProducts.length; i++) {
      for (const key in props.relatedProducts[i]) {
        if (typeof (props.relatedPhotos[i]) === 'object') {
          // console.log('Hard to find URL: ', props.relatedPhotos[i].results[0].photos[0]);
          if (props.relatedPhotos[i].results[0].photos[0].url) {
            props.relatedProducts[i].image = props.relatedPhotos[i].results[0].photos[0].url;
          } else {
            props.relatedProducts[i].image = 'https://www.m-suniforms.gr/wp-content/uploads/2018/10/no-image-icon-21.png';
          }
        }
      }
    }
  }

  const CardRender = () => (
    <>
      <h1>You might also dig on:</h1>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={200} cols={3}>
          {props.relatedProducts.map((tile, index) => (
            <GridListTile>
              {/* {console.log('should be an object: ', props.relatedProducts[index].image)} */}
              <img
                src={props.relatedProducts[index].image}
                alt={`Img for: ${tile.name}`}
              />
              <GridListTileBar
                title={(
                  <Ratings id={tile.id} />
             )}
                subtitle={(
                  <div>
                    <SimpleModal tile={props.relatedProducts[index]} setModal={setModal} selectedProductDetails={props.selectedProductDetails} />
                  </div>
             )}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                /* onClick, this button should add the clicked card to a new state, that will render another carousel underneath the existing one. */
                actionIcon={(
                  <IconButton
                    aria-label={`star ${tile.title}`}
                    onClick={function () {
                      if (props.outfitList.indexOf(tile) < 0) {
                        props.setOutfitList((item) => item.concat(tile));
                      } else {
                        alert('You already got one dawg!');
                      }
                    }}
                  >
                    <AddCircleIcon className={classes.title} />
                  </IconButton>
             )}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );

  if (props.relatedProducts !== []) {
    return CardRender();
  }
  return (
    <div>loading</div>
  );
};

export default CardsTable;
