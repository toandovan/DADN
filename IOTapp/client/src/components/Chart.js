import React, {useEffect, useState} from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

function createData(time, amount) {
  return { time, amount };
}
var data=[]
const request = async () => {
  // let temp_data = []
  data = []
  const response = await fetch('/Dashboard/date/'+Date.now());
  const json = await response.json();
  const x=JSON.parse(JSON.stringify(json))
  if (x==""){
    return
  }
  // console.log(x)
  x.sensorData.map(res=>data.push(createData((new Date(res.date)).getUTCMinutes(),res.sensor_value[0])))
  // return temp_data
}
request()
export default function Chart() {

  const [dataState, setdataState] = useState(data)
  // const socket = io.connect(ENDPOINT);
  // socket.on('FromAPI', (data) => {
  //   console.log(data);
  //   // socket.emit('my other event', { my: 'data' });
  // });
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", flag => {
      if(flag){
        console.log(flag)
        request()
        console.log(data)
        setdataState(data)
      }
      // setdataState(newdata);
    });
  }, []);

  const theme = useTheme();
  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={dataState}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Humidity %
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}