/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
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
import Carousel from 'react-bootstrap/Carousel';
import Ratings from './ratings.jsx';
import SimpleModal from './modal.jsx';

const useStyles = makeStyles((theme) => ({
  riroot: {
    display: 'block',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(-1)',
    spacing: 4,
  },
  title: {
    color: theme.palette.primary.main,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    position: 'absolute',
    zIndex: 2,
  },
  card: {
    maxWidth: '300px',
    boxShadow: '0 3px 5px 2px rgba(0,0,0,0.3)',
    margin: '20px',
  },
  carouselItem: {
    display: 'flex',
    width: '800px',
    height: '400px',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: 'auto',
    zIndex: 1,
  },
}));

const CardsTable = (props) => {
  const classes = useStyles();
  const [modalIsOpen, setModal] = useState(false);

  props.relatedProducts.forEach((thing, index) => {
    props.relatedProducts[index].image = [];
  });

  if (props.relatedPhotos.length > 0) {
    for (let i = 0; i < props.relatedProducts.length; i += 1) {
      for (const key in props.relatedProducts[i]) {
        if (typeof (props.relatedPhotos[i]) === 'object') {
          // console.log('Hard to find URL: ', props.relatedPhotos[i].results[0].photos[0]);
          if (props.relatedPhotos[i].results[0].photos[0].url) {
            for (let j = 0; j < props.relatedPhotos[i].results[0].photos.length; j += 1) {
              props.relatedProducts[i].image.push(props.relatedPhotos[i].results[0].photos[j].url);
            }
          } else {
            props.relatedProducts[i].image.push('https://www.warnersstellian.com/Content/images/product_image_not_available.png');
          }
        }
      }
    }
  }

  const CardRender = () => (
    <>
      <h2>Based on your viewing:</h2>
      <div className={classes.riroot}>
        <GridList className={classes.gridList} cellHeight={200} cols={3}>
          {props.relatedProducts.map((tile, index) => (
            <GridListTile className={classes.card} key={index}>
              <Carousel className={classes.carouselItem} interval={null}>
                {tile.image.map((photo, i) => (
                  <Carousel.Item>
                    <img src={photo} alt={`Img for ${tile.name}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
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
                    className="ri-button"
                    aria-label={`star ${tile.title}`}
                    onClick={function () {
                      if (props.outfitList.indexOf(tile) < 0) {
                        console.log('heres the tile: ', tile);
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
    // console.log('related products in render: ', props.relatedProducts);
    return CardRender();
  }
  return (
    <div>loading</div>
  );
};

export default CardsTable;
