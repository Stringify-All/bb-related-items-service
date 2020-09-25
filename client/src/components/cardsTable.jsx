import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import RelatedItems from './App.jsx';

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
  gridListTile: {

  },
}));

function CardsTable(props) {
  const classes = useStyles();
  const tileData = props.products;
  console.log('here is the props B: ', props.products);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cellHeight={160} cols={3}>
        {tileData.map((tile) => (
          <GridListTile>
            <img src={tile.img} alt="Whoopsie!" />
            <GridListTileBar
              title={tile.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default CardsTable;
