import React from 'react';
// eslint-disable-next-line
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
// function preventDefault(event) {
//   event.preventDefault();
// }

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});
var x=[]
const request = async () => {
  const response = await fetch('/Sensor');
  const json = await response.json();
  x=JSON.parse(JSON.stringify(json))
  console.log(x)
}
request()
//
export default function SensorList() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Average of Humidity</Title>
    </React.Fragment>
  );
}