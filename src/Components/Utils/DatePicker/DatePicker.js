import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';
import React from 'react';
import './index.css';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="center">
        <CalendarTodayIcon fontSize='small' className='mt-1 mr-2'/>
        <DatePicker
            className='datestyle'
            format="EEEE, MMMM d, yyyy"
            disableFuture
            value={selectedDate}
            onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
