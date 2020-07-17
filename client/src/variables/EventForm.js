import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
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
  selectField: {
    color: '#1F8EF1',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100,
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
  let [Device, setDevice] = React.useState(undefined);
  let [open, setOpen] = React.useState(false);

  let deviceList = ["Speaker"]

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

  function handleDeviceChange(e){
    setDevice(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function HandleEventClick(){
    // console.log(Date +' ' + Duration +' '+Intensity + ' '+Device)
    if((Date != undefined) && (Duration != undefined) && (Intensity != undefined) && (Device != undefined)){
      axios.post(`/event`, {Date,Duration,Intensity,Device})
      // console.log("hihi dung roi")
    }
    // else{
    //   console.log("hihi sai roi")
    // }
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
       <FormControl className={classes.selectField}>
       <InputLabel 
       id="demo-controlled-open-select-label"
       style={{color: "#1F8EF1"}}
       >Device</InputLabel>
        <Select
           style={{color: "#1F8EF1"}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={Device || ''}
          onChange={(e)=>{handleDeviceChange(e)}}
        >
          {deviceList.map((d) => (
            <MenuItem key={d} value={d}>{d}</MenuItem>
          ))}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>

       </FormControl>
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