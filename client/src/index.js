/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
// import SignIn from "./views/SignIn.js"
// import AuthApi from "./variables/AuthApi.js"
// import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

// function NAT() {
//   const [auth, setAuth] = React.useState(false)
//   const RouteSignIn = ({ component: Component, ...rest }) => {
//     const authapi = React.useContext(AuthApi)
//     // console.log({...rest})
//     return (
//       // eslint-disable-next-line
//       <Route {...rest} render={props => (authapi.auth == false) ? <Component {...props} /> : <Redirect to="/admin" />} />
//     )
//   }
// return(
//   <AuthApi.Provider value={{ auth, setAuth }}>
//     <Router history={hist}>
//       <Switch>
        
//         <Route path="/admin" render={props => <AdminLayout {...props} />} />
//         <RouteSignIn path="/" component={SignIn} />
//         <Redirect from="/" to="/admin/dashboard" />
//       </Switch>
//     </Router>,
//   </AuthApi.Provider>
// )
// }

const hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
      <Switch>        
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>,
  document.getElementById("root")
);


