import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { useSelector } from 'react-redux';

export default function FreeTimeIndex() {
    const data = useSelector(state => state);
    const ChartData =data?data.chartData:null;
    const ToPercentage=(a,b)=>Math.floor((a / b) * 100);
    const Percentagetime=ChartData?ToPercentage(Number(ChartData.freeTime.total),Number(data.freeTimeMaxUsage)):0

    return (
        <div className='p-3  screen-time 
        d-flex flex-column justify-content-between align-items-center'>
            <h4 className='txt-grey text-center'>Free-time Usage</h4>
            <div className='wt-100 mb-4'>
                <div className='p-2 d-flex justify-content-between  wt-100'>
                    <div className='text-left'>
                        <span>Used Time</span>
                        <h5 className='text-success'>{ChartData?ChartData.freeTime.total:0} mins</h5>
                    </div>
                    <div className='text-right'>
                        <span>Max Time</span>
                        <h5 className=' text-danger'>{data?data.freeTimeMaxUsage:0} mins</h5>
                    </div>
                </div>
                <div className="progress ">
                    <div className="progress-bar" style={{width:`${Percentagetime}%`}}>
                        <b>{Percentagetime}%</b>
                    </div>
                </div>
            </div>
            <div className='wt-100 d-flex flex-column flex-lg-row justify-content-between'>
               {/* <SpeedDialFAB actions={actions}/> */}
               <Button variant='outlined' color='primary' size='small' className='m-1'>
                    <SettingsIcon/>Change Restriction
                </Button>
                <Button variant='outlined' color='primary' size='small' className='m-1'>
                    <AddIcon/>Extend Free-Time
                </Button>
            </div>

        </div>
    )
}
