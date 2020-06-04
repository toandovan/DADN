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

export default function Estimation() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Average of Humidity</Title>
      <Typography component="p" variant="h4">
        55%
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 02 June, 2020
      </Typography>
      <div>
        {/* <Link color="primary" href="#" onClick={preventDefault}> */}
          All good
        {/* </Link> */}
      </div>
    </React.Fragment>
  );
}