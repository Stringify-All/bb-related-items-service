import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 750,
    height: 450,
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #5eaaa8',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalButton: {
    background: 'none !important',
    border: 'none',
    padding: '0!important',
    color: theme.palette.primary.light,
    fontSize: '150',
  },
  root: {
    flexGrow: 1,
    boxShadow: 'none!important',
  },
  gridPaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none!important',
  },
}));

function FormRow(props) {
  console.log('heres what formRow has access to: ', props);
  const classes = useStyles();
  if (props.productTwo !== undefined) {
    return (
      <>
        <Grid item xs={4}>
          <Paper className={classes.gridPaper} style={{ float: 'left', padding: '10px', color: '#056676' }}>{props.productOne}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.gridPaper}>{props.item}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.gridPaper} style={{ float: 'right', padding: '10px', color: '#056676' }}>{props.productTwo}</Paper>
        </Grid>
      </>
    );
  }
  return (
    <div />
  );
}

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  /* Things to put into the modal window */
  const featureOneSelect = props.selectedProductDetails.features[0].feature;
  const valueOneSelect = props.selectedProductDetails.features[0].value;
  const featureOnetile = props.selectedProductDetails.features[0].feature;
  const valueOnetile = props.selectedProductDetails.features[0].value;
  const featureTwoSelect = props.selectedProductDetails.features[1].feature;
  const valueTwoSelect = props.selectedProductDetails.features[1].value;
  const featureTwotile = props.selectedProductDetails.features[1].feature;
  const valueTwotile = props.selectedProductDetails.features[1].value;
  /*                                                               */

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1>Compare and Contrast like a b0ss:</h1>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow productOne={props.selectedProductDetails.name} item="Item Name" productTwo={props.tile.name} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow productOne={props.selectedProductDetails.category} item="Category" productTwo={props.tile.category} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow productOne={`$${props.selectedProductDetails.default_price}`} item="Price" productTwo={`$${props.tile.default_price}`} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow productOne={`Feature: ${featureOneSelect}, Material: ${valueOneSelect}`} item="Features" productTwo={`Feature: ${featureOnetile}, Material: ${valueOnetile}`} />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow productOne={`Feature: ${featureTwoSelect}, Material: ${valueTwoSelect}`} item="Features" productTwo={`${featureTwotile}: ${valueTwotile}`} />
          </Grid>
        </Grid>
      </div>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.modalButton}>
        {props.tile.name}
        {' '}
        {props.tile.category}
        {' '}
        $
        {props.tile.default_price}
        {' '}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
