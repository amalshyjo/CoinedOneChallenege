import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CompareIcon from '@material-ui/icons/Compare';
import React from 'react';
import RadarChart from '../Charts/Radar';

const useStyles = makeStyles((theme) => ({

  appBar: {
    color:' #022742',
    background: 'linear-gradient(90.96deg, rgb(48 118 222 / 44%) 1.05%, rgb(241 108 11 / 32%) 99.89%);',
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({Label,Value}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Value2=[50,50,10]

  return (
    <div>
      <div className='d-flex justify-content-center  wt-100 '>
      <Button className='text-center' color='primary' onClick={handleClickOpen}>
            <CompareIcon/> compare
        </Button>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Compare Previous Result's
            </Typography>
          </Toolbar>
        </AppBar>
        <div className='container wt-100 ht-100 '>
            <RadarChart Label={Label}
                Value={Value} Value2={Value2}/>
        </div>
      </Dialog>
    </div>
  );
}
