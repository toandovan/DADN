import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Button
  } from "reactstrap";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    color: '#1F8EF1',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
  numField: {
    color: '#1F8EF1',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
  number: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0
    }
  },
  input: {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0
    },
    color: '#1F8EF1'
    }
}));

export default function EventForm() {
  let [Intensity,SetIntensity] = React.useState(undefined)
  let [Date,setDate] = React.useState(undefined)
  let [Duration,setDuration] = React.useState(undefined)



  const classes = useStyles();

  function handleIntensityChange(e){
    SetIntensity(e.target.value);
  }
  function handleDateChange(e){
    setDate(e.target.value);
  }
  function handleDurationChange(e){
    setDuration(e.target.value);
  }



  function HandleEventClick(){
    console.log(Date +' ' + Duration +' '+Intensity)
    // axios.post(`/DeviceSchedule`, {[Date,Duration,Intensity]})
  }



  return (
    <form className={classes.container} noValidate>
      <TextField 
        style={{color: "white"}}
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        // defaultValue="2017-05-24T10:30"
        placeholder="10"
        className={classes.textField}
        InputProps={{
        className: classes.input,
        }}
        InputLabelProps={{
            className: classes.input,
            shrink: true,
        }}
        value={Date || ' '}
        onChange={(e)=>handleDateChange(e)}
      />
      <TextField 
        id="duration"
        label="Duration (min)"
        type="number"
        min="1"
        placeholder="10"
        className={classes.number}
        InputProps={{
        className: classes.input,
        }}
        InputLabelProps={{
            className: classes.input,
            shrink: true,
        }}
        value={Duration || ' '}
        onChange={(e)=>handleDurationChange(e)}
      />
      <TextField 
        id="intensity"
        label="Intensity"
        type="number"
        min="1" max="5000"
        placeholder="250"
        className={classes.number}
        InputProps={{
        className: classes.input,
        }}
        InputLabelProps={{
            className: classes.input,
            shrink: true,
        }}
        value={Intensity || ' '}
        onChange={(e)=>handleIntensityChange(e)}
      />
      
      <Button 
        outline 
        size="sm" 
        color="#1F8EF1" 
        onClick={HandleEventClick}
        >
        Add Event
        </Button>
    </form>
  );
}