import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import SignalCellular0BarIcon from '@material-ui/icons/SignalCellular0Bar';
import SignalCellular1BarIcon from '@material-ui/icons/SignalCellular1Bar';
import SignalCellular2BarIcon from '@material-ui/icons/SignalCellular2Bar';
import SignalCellular3BarIcon from '@material-ui/icons/SignalCellular3Bar';
import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import axios from 'axios';

function ChooseIcon(props) {
  // eslint-disable-next-line
  if (props.input == 100) { return (<SignalCellular4BarIcon />) }
  else if (props.input >= 75) { return (<SignalCellular3BarIcon />) }
  else if (props.input >= 50) { return (<SignalCellular2BarIcon />) }
  else if (props.input >= 25) { return (<SignalCellular1BarIcon />) }
  else { return (<SignalCellular0BarIcon />) }
}

const useStyles = makeStyles({
  root: {
    width: 250,
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
    color: '#1F8EF1',
    width: 42,
  }
});


function ChangeSpeakerReq(array) {
  axios.post(`/Dashboard/sensorData`, { array })
  // .then(res => {
  //   console.log(res);
  //   console.log(res.data);
  // })
}
// async function ChangeSpeakerReq(array){
//   const x = await fetch('/Dashboard/sensorData/' + Date.now())
// }

export default function InputSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(Number(props.idDevice));

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleSliderToSave = (event, newValue) => {
    console.log("after mouse up, value after mouse up ")
    console.log(newValue)
    // eslint-disable-next-line
    let array_json = (newValue == 0)
      ?
      [{
        "device_id": props.idDevice,
        "values": ["0", "0"]
      }]
      :
      [{
        "device_id": props.idDevice,
        "values": ["1", newValue.toString()]
      }];

    // console.log(array_json)
    ChangeSpeakerReq(array_json)
  }

  return (
    <div className={classes.root} style={{ margin: "0 auto 0 auto" }}>
      {/* <Typography id="input-slider" gutterBottom>
        AssessmentIcon
      </Typography> */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ChooseIcon input={value} />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            onChangeCommitted={handleSliderToSave}
            aria-labelledby="input-slider"
            valueLabelDisplay="auto"
            className={classes.number}
            // InputProps={{
            //   className: classes.input,
            // }}
            // InputLabelProps={{
            //   className: classes.input,
            //   shrink: true,
            // }}
          />
        </Grid>
        {/* <Grid item >
          <Input
            className={classes.input}
            value={value}
            style={{color: "rgb(63, 81, 181)"}}  
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid> */}
      </Grid>
    </div>
  );
}
