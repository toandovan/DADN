import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from '.././components/SignIn';
import Dashboard from '.././components/Dashboard';
import AuthApi from ".././utils/AuthApi"
import SensorList from ".././components/SensorList";

function Routes(props){
    return (
        <Switch>
            <RouteSignIn path="/S" component = {SignIn} />
            <RouteDashBoard path="/Dash" component = {Dashboard} />
            {/* <Route path="/SensorList" component={SensorList}/> */}
        </Switch>
    )
}
const RouteSensorInfo=()=>{
    
}
const RouteSignIn = ({component: Component, ...rest}) =>{
    const authapi = React.useContext(AuthApi)
    // console.log({...rest})
    return (
        // eslint-disable-next-line
        <Route {...rest} render={props=> (authapi.auth == false) ? <Component {...props} /> : <Redirect to="/Dash"/>} />
    )
}


const RouteDashBoard = ({component: Component, path: Path, ...rest}) =>{
    const authapi = React.useContext(AuthApi)
    return (
        <Route path = {Path} render={props=> 
            // eslint-disable-next-line
            (authapi.auth == true) ? <Component {...props} /> : <Redirect to="/S"/>
            } />
        // || Path === "/Dash"
    )
}

export default Routes;