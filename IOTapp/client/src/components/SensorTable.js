import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,device_id, sensor_type, value, status) {
  return { id,device_id, sensor_type, value, status };
}

//create data humidity and temperature

const humidityData = [
  createData(0, 'aa', 'aa', 'aa', 'aa'),
  createData(1, '', '', '', ''),
  createData(2, '', '', '', ''),
  createData(3, '', '', '', ''),
  createData(4  , '', '', '', ''),
];
const temperatureData = [
  createData(0, 'bb', 'bb', 'bb', 'bb'),
  createData(1, '', '', '', ''),
  createData(2, '', '', '', ''),
  createData(3, '', '', '', ''),
  createData(4  , '', '', '', ''),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TableInfo() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Sensor Humidity</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Device id</TableCell>
            <TableCell>Type </TableCell>
            <TableCell>Value </TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {humidityData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.device_id}</TableCell>
              <TableCell>{row.sensor_type}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
      <Title>Sensor Temperature</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Device id</TableCell>
            <TableCell>Type </TableCell>
            <TableCell>Value </TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {temperatureData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.device_id}</TableCell>
              <TableCell>{row.sensor_type}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more
        </Link>
      </div>
    </React.Fragment>
    
  );
}