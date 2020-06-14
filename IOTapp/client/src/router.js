import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from './components/SignIn';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SensorList from './components/SensorList';
import DeviceList from './components/DeviceList';
import AuthApi from "./utils/AuthApi"
import LandingPage from './components/HeaderPage';
import MoisPage from './components/Humidity' 
// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = useState(
//     !localStorage.getItem(localStorageKey) ? false :  localStorage.getItem(localStorageKey)
//   );
 
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);
 
//   return [value, setValue];
// };

function App() {
  const [auth, setAuth] = useState(false)
  // const [auth, setAuth] = useStateWithLocalStorage(
  //   'myValueInLocalStorage'
  // ); 
  return (
    <div className="App">
    <AuthApi.Provider value = {{auth, setAuth}}>
      <Router>
              {/* <Route exact path="/" component={SignIn}/> */}
              <RouteSignIn exact path="/" component = {SignIn} />
              <RouteDashBoard exact path="/Mois" component = {MoisPage} />
              <RouteDeviceList exact path="/DeviceList" component = {DeviceList} />
              <RouteSensorList exact path="/SensorList" component={SensorList}/>
              <RouteDashBoard exact path="/Dashboard" component={Dashboard} />

      </Router>
    </AuthApi.Provider>
    </div>
  );
}

const RouteSignIn = ({component: Component, ...rest}) =>{
  const authapi = React.useContext(AuthApi)
  // console.log({...rest})
  return (
      // eslint-disable-next-line
      <Route {...rest} render={props=> (authapi.auth == false) ? <Component {...props} /> : <Redirect to="/Dashboard"/>} />
  )
}



const RouteDashBoard = ({component: Component, path: Path, ...rest}) =>{
  const authapi = React.useContext(AuthApi)
  return (
      <Route path = {Path} render={props=> 
          // eslint-disable-next-line
          (authapi.auth == true) ? <Component {...props} /> : <Redirect to="/"/>
          } />
      // || Path === "/Dash"
  )
}
const RouteSensorList = ({component: Component, ...rest}) =>{
  const authapi = React.useContext(AuthApi)
  // console.log({...rest})
  return (
      // eslint-disable-next-line
      <Route {...rest} render={props=> (authapi.auth == true) ? <Component {...props} /> : <Redirect to="/"/>} />
  )
}

// const DashBoard = ({component: Component, ...rest}) =>{
//   const authapi = React.useContext(AuthApi)
//   // console.log({...rest})
//   return (
//       // eslint-disable-next-line
//       <Route {...rest} render={props=> (authapi.auth == true) ? <Component {...props} /> : <Redirect to="/"/>} />
//   )
// }

const RouteDeviceList = ({component: Component, ...rest}) =>{
  const authapi = React.useContext(AuthApi)
  // console.log({...rest})
  return (
      // eslint-disable-next-line
      <Route {...rest} render={props=> (authapi.auth == true) ? <Component {...props} /> : <Redirect to="/"/>} />
  )
}
export default App;
