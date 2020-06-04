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
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '02 June, 2020', '40 %', 'Good', '99', 2.44),
  createData(1, '02 June, 2020', '40 %', 'Bad', '74', 6.99),
  createData(2, '02 June, 2020', '40 %', 'OK', '53', 0.81),
  createData(3, '02 June, 2020', '40 %', 'Bad', '100', 4.39),
  createData(4, '02 June, 2020', '40 %', 'Good', '19', 2.79),
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
      <Title>Each Day Info</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Avg Humid</TableCell>
            <TableCell>Estimation</TableCell>
            <TableCell>Highest Value</TableCell>
            <TableCell align="right">Lowest Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Info
        </Link>
      </div>
    </React.Fragment>
  );
}