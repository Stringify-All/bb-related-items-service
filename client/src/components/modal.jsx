import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
    width: 500,
    height: 400,
    backgroundColor: theme.palette.background.paper,
    border: '6px solid #5eaaa8',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalButton: {
    background: 'none !important',
    border: 'none',
    padding: '0!important',
    color: theme.palette.primary.light,
    fontSize: '100',
  },
}));

export default function SimpleModal(props) {
  console.log('here are the props in modal: ', props);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div id="content">
        <div style={{ width: '50%', float: 'left', padding: '10px' }}>
          <h1>
            {props.tile.name}
          </h1>
          <div id="object1" />
          <p>
            {props.tile.description}
          </p>
          <div id="object2" />
          <p>
            {props.tile.features[0].value}
          </p>
        </div>

        <div style={{ width: '50%', float: 'right', padding: '10px' }}>
          <h1>
            {props.selectedProductDetails.name}
          </h1>
          <div id="object3" />
          <p>
            {props.selectedProductDetails.description}
          </p>
          <div id="object4" />
          <p>
            {props.selectedProductDetails.features[0].value}
          </p>
        </div>
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
