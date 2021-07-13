import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LaptopIcon from '@material-ui/icons/Laptop';
import LaunchIcon from '@material-ui/icons/Launch';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import React from 'react';
import Carousel from '../../Utils/Carousel/Carousel';

export default function Devices() {
    const actions = [
        { icon: <LaptopIcon style={{ fontSize: 50 }}/>, name: 'Aditya Laptop',usage:'10min' },
        { icon: <PhoneAndroidIcon style={{ fontSize: 50 }} />, name: 'My Phone',usage:'20min' },
        { icon: <LaptopIcon style={{ fontSize: 50 }}/>, name: 'My Laptop',usage:'10min' },
      ];
    return (
        <div className='p-3  screen-time 
        d-flex flex-column justify-content-between align-items-center'>
            <h4 className='txt-grey text-center'>Devices</h4>
            <div className='wt-100 p-4'>
                <Carousel actions={actions}/>
            </div>
            <div className='wt-100 d-flex flex-column flex-lg-row justify-content-between'>
               {/* <SpeedDialFAB actions={actions}/> */}
                <Button variant='outlined' color='primary' size='small' className='m-1'>
                    <LaunchIcon/>See All Device
                </Button>
                <Button variant='outlined' color='primary' size='small' className='m-1'>
                    <AddIcon/>Add Device
                </Button>
            </div>
        </div>
    )
}
