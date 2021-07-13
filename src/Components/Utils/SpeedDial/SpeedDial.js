import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { SpeedDialIcon } from '@material-ui/lab';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  speedDial: {
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));



export default function SpeedDialFAB({actions}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (

        <SpeedDial
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          icon={<SpeedDialIcon openIcon={<ExpandMoreIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction='up'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.text}
              icon={action.icon}
              tooltipTitle={action.text}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>

  );
}
