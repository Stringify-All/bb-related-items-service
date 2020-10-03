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
    width: 600,
    height: 600,
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
  object: {
    height: 15,
    // display: 'inline-flex',
  },
  root: {
    flexGrow: 1,
  },
  gridPaper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// export default function SimpleModal(props) {
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div style={modalStyle} className={classes.paper}>
//       <div id="content">
//         <h1>
//           What are these Thr3ads made of?
//         </h1>
//         {/* left content */}
//         <div style={{ width: '50%', float: 'left', padding: '10px' }}>
//           <h2>
//             {props.tile.name}
//           </h2>
//           <div className={classes.object} />
//           <p>
//             {props.tile.features[0].value}
//           </p>
//           <div className={classes.object} />
//           <p>
//             ${props.tile.default_price}
//           </p>
//         </div>

//         {/* right content */}
//         <div style={{ width: '50%', float: 'right', padding: '10px' }}>
//           <h2>
//             {props.selectedProductDetails.name}
//           </h2>
//           <div className={classes.object} />
//           <p>
//             {props.selectedProductDetails.features[0].value}
//           </p>
//           <div className={classes.object} />
//           <p>
//             ${props.selectedProductDetails.default_price}
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen} className={classes.modalButton}>
//         {props.tile.name}
//         {' '}
//         {props.tile.category}
//         {' '}
//         $
//         {props.tile.default_price}
//         {' '}
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
function FormRow() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={4}>
        <Paper className={classes.gridPaper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.gridPaper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.gridPaper}>item</Paper>
      </Grid>
    </>
  );
}

export default function SimpleModal(props) {
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
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
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
