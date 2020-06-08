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
var date=(new Date()).toString()
var estimation=0
const request = async () => {
  const response = await fetch('/Dashboard/date/'+Date.now());
  const json = await response.json();
  const x=JSON.parse(JSON.stringify(json))
  x.sensorData.map(res=>estimation+=parseFloat(res.sensor_value[1]))
  estimation=estimation/x.sensorData.length
}
request()
//
export default function Home() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Average of Humidity</Title>
      <Typography component="p" variant="h4">
        {
           estimation
        }
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {
            date
        }
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}> */}
          All good
        {/* </Link> */}
      </div>
    </React.Fragment>
  );
}