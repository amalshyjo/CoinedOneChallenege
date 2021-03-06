import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreIcon from '@material-ui/icons/MoreVert';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import React from 'react';
import DatePickers from '../../Utils/DatePicker/DatePicker';
import Logo from './Logo.svg';
const useStyles = makeStyles((theme) => ({
  root:{
    color:' #022742',
    background: 'linear-gradient(90.96deg, rgb(48 118 222 / 44%) 1.05%, rgb(241 108 11 / 32%) 99.89%);',

  },
  grow: {
    // flexGrow: 1,
    display:'flex',
    justifyContent:'space-around',
    width:'100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:'#ffffff00',
    '&:hover': {
      backgroundColor: '#ebf2f9'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose} className='txt-grey'>
                <EditIcon className='mr-2 '/>  Edit Details
        </MenuItem>
        <MenuItem onClick={handleMenuClose} className='txt-grey'>
                <DeleteIcon className='mr-2 '/>  Delete Child
        </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    anchorEl={mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={mobileMenuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMobileMenuOpen}
    onClose={handleMobileMenuClose}
    >
        <MenuItem>
            <DatePickers/>
        </MenuItem>
        <MenuItem>
        <Button >
              <PhoneIphoneIcon className='mr-2 '/> Add Device
            </Button> 
        </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Button
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle className='mr-2 '/> Aditya Prasad
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.root} elevation={0}>
        <Toolbar className={classes.grow}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={Logo} alt='logo' height='35px'/> <b>Coined One</b>
          </IconButton>
          {/* For Checking previous Activity on a past date */}
            <div  >
              <div className='d-none d-sm-none d-md-none d-lg-block'>
                <DatePickers/>
              </div>
            </div>
          <div className={classes.sectionDesktop}>
            {/* <Button variant='outlined' color='primary' className='m-3' size='small'>
              <PhoneIphoneIcon className='mr-2 '/> Add Device
            </Button> */}
            <Button
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large'/> Aditya Prasad
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            {renderMobileMenu}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
