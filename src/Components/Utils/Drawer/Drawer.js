import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import React from 'react';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function MenuDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({bottom: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
        <Button onClick={toggleDrawer('bottom', true)} color='primary'> 
        Filter <FilterListIcon/></Button>
        <Drawer anchor={'bottom'} open={state['bottom']} className='custom-filter '
        onClose={toggleDrawer('bottom', false)}>
          <div onClick={toggleDrawer('bottom', false)}>
          {props.children}
          </div>
          </Drawer>
    </div>
  );
}
