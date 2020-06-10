import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// eslint-disable-next-line
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AllInclusive from '@material-ui/icons/AllInclusive';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
// eslint-disable-next-line
import AssignmentIcon from '@material-ui/icons/Assignment';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AuthApi from ".././utils/AuthApi"
import { Router, Link } from 'react-router-dom';
//can use later
// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
    
//   </div>
// );

export function UserInfoButton(){
  const authApi = React.useContext(AuthApi)
  const UserInfoHandle = ()=>{
    // authApi.setAuth(false)
  }
  return (
    <ListItem button onClick = {UserInfoHandle}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="User Information" />
    </ListItem>
  )
}
export function HumidityButton(){
  const authApi = React.useContext(AuthApi)
  const HumidityHandle = ()=>{
    // authApi.setAuth(false)
  }
  return (

    <ListItem button onClick = {HumidityHandle}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Humidity" />
    </ListItem>
  )
}
export function TemperatureButton(){
  const authApi = React.useContext(AuthApi)
  const TemperatureHandle = ()=>{
    // authApi.setAuth(false)
  }
  return (

    <ListItem button onClick = {TemperatureHandle}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Temperature" />
    </ListItem>
  )
}
export function DashBoardButton(){
  const authApi = React.useContext(AuthApi)
  return (
    <ListItem button component={Link} to="/Dash">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dash Board" />
    </ListItem>
  )
}
export function LogOutButton(){
  const authApi = React.useContext(AuthApi)
  const logOutHandle = ()=>{
    authApi.setAuth(false)
  }
  return (

    <ListItem button onClick = {logOutHandle}>
      <ListItemIcon>
        <PowerSettingsNewIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  )
}

export function SensorButton(){
  const authApi = React.useContext(AuthApi)
  return (
    <ListItem button component={Link} to="/SensorList">
    <ListItemIcon>
      <AllInclusive />
    </ListItemIcon>
    <ListItemText primary="Sensor" />
  </ListItem>
  )
}

//motor
export function MotorButton(){
  const authApi = React.useContext(AuthApi)
  return (
    <ListItem button component={Link} to="/DeviceList">
    <ListItemIcon>
      <AllInclusive />
    </ListItemIcon>
    <ListItemText primary="Motor" />
  </ListItem>
  )
} 
