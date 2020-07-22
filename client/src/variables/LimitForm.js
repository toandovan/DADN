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

export default function LimitForm() {

  let [Lower, SetLower] = React.useState(undefined)
  let [Intensity, SetIntensity] = React.useState(undefined)
  let [Upper, SetUpper] = React.useState(undefined)

  React.useEffect(() => {
    axios.get('/device/autoDevice/initLimit').then((res) => {
      console.log(res.data)
      SetLower(res.data[0][0])
      SetIntensity(res.data[0][1])
      SetUpper(res.data[1][0])
    })
  }, []);

  //   let [open, setOpen] = React.useState(false);





  let deviceList = ["Speaker"]

  const classes = useStyles();

  function handleIntensityChange(e) {
    SetIntensity(e.target.value);
  }
  function handleLowerChange(e) {
    SetLower(e.target.value);
  }
  function handleUpperChange(e) {
    SetUpper(e.target.value);
  }

  //   function handleDurationChange(e){
  //     setDuration(e.target.value);
  //   }

  //   function handleDeviceChange(e){
  //     setDevice(e.target.value);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  function HandleApplyClick() {
    // console.log(Lower)
    // console.log(Intensity)
    // console.log(Upper)
    let autoValue = [[Lower, Intensity], [Upper, "0"]]
    console.log("in ChangeSensorLimit")
    axios.post(`/device/autoDevice`, { autoValue })
  }






  return (
    <form className={classes.container} noValidate>
      <TextField
        id="Lower"
        label="Lower Bound"
        type="number"
        min="0"
        // placeholder="0"
        className={classes.number}
        InputProps={{
          className: classes.input,
        }}
        InputLabelProps={{
          className: classes.input,
          shrink: true,
        }}
        value={Lower || ''}
        onChange={(e) => handleLowerChange(e)}
      />
      <TextField
        id="intensity"
        label="Set Device's intensity"
        min="0" max="5000"
        type="number"
        // placeholder="250"
        // defaultValue=
        className={classes.number}
        InputProps={{
          className: classes.input,
        }}
        InputLabelProps={{
          className: classes.input,
          shrink: true,
        }}
        value={Intensity || ''}
        onChange={(e) => handleIntensityChange(e)}
      />
      <TextField
        id="Upper"
        label="Upper Bound"
        type="number"
        min="1023"
        placeholder="100"
        className={classes.number}
        InputProps={{
          className: classes.input,
        }}
        InputLabelProps={{
          className: classes.input,
          shrink: true,
        }}
        value={Upper || ''}
        onChange={(e) => handleUpperChange(e)}
      />

      <Button
        outline
        size="sm"
        color="#1F8EF1"
        onClick={HandleApplyClick}
      >
        Apply
        </Button>
    </form>
  );
}