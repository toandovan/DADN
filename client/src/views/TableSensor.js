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
import socketIOClient from "socket.io-client";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
const ENDPOINT = "http://localhost:8080";
class Tables extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading: 'init',
      sensor: []
    }
    this.socket=socketIOClient(ENDPOINT);
    this.socket.on("FromAPI",flag=>{
      if(flag){
        this.request().then((res)=>{
          this.setState({loading: 'true',sensor: res.sensorData});
          this.setState({loading: 'false'});
        })
      }
    })
  }
  request= async()=>{
    const response= await fetch('/device/sensor');
    const json=await response.json();
    const x=JSON.parse(JSON.stringify(json));
    return x;
  }
  componentDidMount(){
    //this.request
    this.request().then((res)=>{
      this.setState({loading: 'true',sensor: res.sensorData});
      this.setState({loading: 'false'});
      // console.log(res);
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }
  render() {
    if (this.state.loading === 'init') {
      return(
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">Intializing...</CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
      )
    }


    if (this.state.loading === 'true') {
      return(
        <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">Loading...</CardTitle>
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
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Table Sensor</CardTitle>
                  <p className="category">Here is the values</p>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Device ID</th>
                        <th>Area</th>
                        <th>Type</th>
                        <th className="text-center">value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.sensor.map((data)=>(
                          <tr key={data._id}>
                            <td>{data._id}</td>
                            <td>{data.area}</td>
                            <td>{data.status}</td>
                            <td className="text-center">{data.value}</td>
                          </tr>
                        ))
                      }
                      {/* <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr> */}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;