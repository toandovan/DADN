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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  data_moisChart2,
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";
import socketIOClient from "socket.io-client";

// import { keys } from "@material-ui/core/styles/createBreakpoints";
// import { array } from "prop-types";


// function createData(time, amount) {
//   return { time, amount };
// }

let textStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  text: {
      color: '#1F8EF1', 
      fontWeight: "bold",
    },
  }
);

const ENDPOINT = "http://localhost:8080";

class ChartByDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'init',
      dateFlag: ''
    };
    // RealTime
    // const socket=socketIOClient(ENDPOINT);
    // // socket.on("FromAPI", res => console.log(res))
    // socket.on("FromAPI",flag=>{
    //   // console.log("socket io true")
    //   if(flag){
    //     this.request("Mois").then((res)=>{
    //       this.setState({loading: 'true'})
    //       ////////////////
    //       // console.log("This is res")
    //       // console.log(res)
    //       data_moisChart2[0] = res[0]
    //       data_moisChart2[1] = res[1]
    //       // this.setState({bigChartData: "data1"}); 
    //       this.setState({
    //         dateFlag: localStorage.getItem("dateSelected")
    //       });
    //       this.setState({loading: 'false'});
    //     })
    //   }
    // })
    ////////
  }


  handleDateChange = (e) => {
    console.log(e.target.value)
    localStorage.setItem("dateSelected", e.target.value)
    this.setState({
      dateFlag: e.target.value
    });
  };

  request = async (type) => {
    // let temp_data = []
    let data = []
    let time = []
    // let data_time = {}
    const response = await fetch('/Dashboard/type/' + type);
    const json = await response.json();
    const x = JSON.parse(JSON.stringify(json))
    if (x == "") {
      return
    }
    x.sensorData.map(res => {
      // console.log(res.sensor_value[0])
      data.push(parseInt(res.sensor_value[0]))
      time.push(new Date(res.date))
      // date_time.push(parseInt(res.sensor_value[0]): res.Date)
      // console.log(data)
    })
    return [data, time]
    // return date_time
  }

  // componentWillUnmount() {
  //   // fix Warning: Can't perform a React state update on an unmounted component
  //   this.setState = (state, callback) => {
  //     return;
  //   };
  // }

  componentDidUpdate(prevProps) {

    //You must have an if check, or loop forever
    if(this.props.sensor !== prevProps.sensor){
       //do something like make an API call
       //perhaps set this on state for display
       if(this.props.sensor != undefined){
        this.request(this.props.sensor).then((record) => {
          while (data_moisChart2.length) { data_moisChart2.pop(); }
          record.forEach(data_ele => data_moisChart2.push(data_ele))
          console.log(data_moisChart2)
          this.setState({ loading: 'false' })
        })
      }
    }
  }

  componentDidMount() {

    this.setState({ loading: 'true' })
    localStorage.setItem("dateSelected", ' ')
    // this.request().then((record) => {
    //   while (data_moisChart2.length) { data_moisChart2.pop(); }
    //   record.forEach(data_ele => data_moisChart2.push(data_ele))
    //   console.log(data_moisChart2)
    //   this.setState({ loading: 'false' })
    // })
  }

  render() {
    if (this.state.loading === 'init') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }


    if (this.state.loading === 'true') {
      console.log('This happens 5th - when waiting for data.');
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h2">Choose Sensor Type</CardTitle>
                  </CardHeader>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      )

    }

    return (

      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      
                      <form className={textStyles.container} noValidate>
                        <TextField
                          className={textStyles.text}
                          id="date"
                          label="Check value by day"
                          type="date"
                          // defaultValue="2017-05-24"    
                          // value={this.state.dateSelect}
                          // style={{
                          //   color: "white",
                          //   width: 200,
                          // }}
                          onChange={(e)=>this.handleDateChange(e)}
                          // className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      props = {this.state.dateFlag}
                      data={chartExample2.data}
                      options={chartExample2.options}
                      redraw={true}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
        </Row>
        </div>
      </>
    );
  }
}

export default ChartByDay;
