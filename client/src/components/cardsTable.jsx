/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
  modalButton: {
    background: 'none !important',
    border: 'none',
    padding: '0!important',
    color: theme.palette.primary.light,
    fontSize: '100',
  },
}));

const CardsTable = (props) => {
  const classes = useStyles();
  const [modalIsOpen, setModal] = useState(false);

  console.log('here is the state being passed in: ', props.relatedProducts);
  const CardRender = () => (
    <>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={200} cols={3}>
          {props.relatedProducts.map((tile) => (
            <GridListTile>
              <img
                src={null}
                alt={`Img for: ${tile.name}`}
              />
              <GridListTileBar
                title={(
                  <Ratings id={tile.id} />
             )}
                subtitle={(
                  <button
                    type="submit"
                    className={classes.modalButton}
                    onClick={() => {
                      if (modalIsOpen === false) {
                        setModal(true);
                      } else {
                        setModal(false);
                      }
                    }}
                  >
                    {tile.name}
                    {' '}
                    {tile.category}
                    {' '}
                    $
                    {tile.default_price}
                    {' '}
                  </button>
             )}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={(
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
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
