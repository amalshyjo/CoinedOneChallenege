import { Divider, FormControl, MenuItem, Paper, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import React from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import Devices from '../../Components/Sections/Devices';
import FreeTimeIndex from '../../Components/Sections/FreeTime';
import ScreenTimeIndex from '../../Components/Sections/ScreenTime';
import MenuDrawer from '../../Components/Utils/Drawer/Drawer';
import MenuPopover from '../../Components/Utils/PopOver/PopOver';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

function MenuOptions() {
    let query = useQuery();
    return(
        <> 
        <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={query.get("filter")}>
                <Link to='/summary?filter=all' >
                    <MenuItem className='wt-100'>
                        <div className='d-flex justify-content-center align-items-center'>
                        <FormControlLabel value="all" className='p-2' control={<Radio color="primary"/>}/>
                        <div>
                            <h6><b>All</b></h6>
                            <p className='text-justify  text-wrap'>Activities during class-time,
                            study-time and play time are shown.</p>
                        </div>
                        </div>
                    </MenuItem>
                </Link>
                <Divider/>
                <Link to='/summary?filter=class' >
                <MenuItem >
                    <div className='d-flex justify-content-center align-items-center'>
                    <FormControlLabel value="class" className='p-2' control={<Radio color="primary"/>}/>
                    <div>
                                <h6><b>Class-time only</b></h6>
                                <p className='text-justify  text-wrap'>Only the activities during the times you scheduled 
                                    as class-time are shown.</p>
                            </div>
                    </div>
                </MenuItem>
                </Link>
                <Divider/>
                <Link to='/summary?filter=study' >
                <MenuItem >
                    <div className='d-flex justify-content-center align-items-center'>
                    <FormControlLabel value="study" className='p-2' control={<Radio color="primary"/>}/>
                    <div>
                                <h6><b>Study-time only</b></h6>
                                <p className='text-justify  text-wrap'>Only the activities during the 
                                    times you scheduled as study-time
                                    or when manually switched to 
                                    study-mode from the mode page 
                                    are shown.</p>
                            </div>
                    </div>
                </MenuItem>
                </Link>
                <Divider/>
                <Link to='/summary?filter=free' >
                <MenuItem >
                    <div className='d-flex justify-content-center align-items-center'>
                    <FormControlLabel value="free" className='p-2' control={<Radio color="primary"/>}/>
                    <div>
                                <h6><b>Free-time only</b></h6>
                                <p className='text-justify  text-wrap'>Only the activities during the 
                                    times you scheduled as free-time 
                                    or when manually switched to 
                                    free-mode from the mode page are 
                                    shown.are shown.</p>
                            </div>
                    </div>
                </MenuItem>
                </Link>
            </RadioGroup>
        </FormControl>
        </>
    )
}

export default function Dashboard() {
    let query = useQuery();
    const filter=query.get("filter")
    return (
        <div className='dash-board container'>
            <div className='row'>
                <div className='col-12 container p-3'>
                    <div className='wt-100 d-flex justify-content-between pl-2 pr-2'>
                        <h4>Activity Summary</h4>
                        <div className='d-none d-lg-block'>
                        <MenuPopover
                        button_children={<span></span>}>
                             <div className='p-2'>
                                <MenuOptions/>
                             </div>
                        </MenuPopover>
                        </div>
                        <div className='d-block d-lg-none'>
                        <MenuDrawer
                        button_children={<span></span>}>
                             <div className='p-2'>
                                <MenuOptions/>
                             </div>
                        </MenuDrawer>
                        </div>
                    </div>
                </div>
               <div className='col-12 col-lg-6 ht-100 mb-4 mb-lg-0'>
                    <Paper className='ht-100 paper'>
                        <ScreenTimeIndex/>
                    </Paper>
               </div>
               <div className='col-12 col-lg-6 row ht-100 no-style'>
                    <div 
                    className={`col-12 mb-4 
                    ${!filter?'d-block':filter!=='class'&&filter!=='study'?'d-block':'d-none'}
                    
                    `}>
                        <Paper className='ht-100 paper'>
                            <FreeTimeIndex/>
                        </Paper>
                    </div>
                    <div className='col-12 mb-4 mb-lg-0'>
                        <Paper className='ht-100 paper'>
                            <Devices/>
                        </Paper>
                    </div>
               </div>
            </div>
        </div>
    )
}
