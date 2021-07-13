import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function LoadBackdrop() {
    const data = useSelector(state => state);
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={data?false:true} >
        <CircularProgress color="inherit" style={{width:100,height:100}} />
      </Backdrop>
    </div>
  );
}
