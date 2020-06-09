import React, { useState, Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes"
import AuthApi from "./utils/AuthApi"
import axios from 'axios'

// const useStateWithLocalStorage = localStorageKey => {
//   const [value, setValue] = useState(
//     !localStorage.getItem(localStorageKey) ? false :  localStorage.getItem(localStorageKey)
//   );
 
//   useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);
 
//   return [value, setValue];
// };
function App2(props){
  const [auth, setAuth] = useState(false)
    return (
      <div className="App">
      {/* <AuthApi.Provider value = {{auth, setAuth}}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider> */}
      <p className="App-intro">{props.apiResponse}</p>
  
  
      </div>
    );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:3001/testAxios")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  // let testStr = "OK"
  
  // axios.post("http://localhost:3001/test", testStr).then(res => console.log(res.data))
  // const [auth, setAuth] = useStateWithLocalStorage(
  //   'myValueInLocalStorage'
  // ); 
  
  render(){
    return(
    <App2 props={this.state}></App2>
    )
  }

  }
  

export default App;
