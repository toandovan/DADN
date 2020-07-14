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

import InputSlider from "../variables/Slider"


const Device = [
  ['Speaker'],
]
class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'init',
      data: []
    };
  }
  requestDevice = async () => {
    const response = await fetch('/device/speaker');
    const json = await response.json();
    const x=JSON.parse(JSON.stringify(json))
    if (x==""){
      return
    }
    // x.sensorData.map(res=>{
    //   data.push(parseInt(res.sensor_value[0]))
    //   time.push(new Date(res.date))
    // })
    return x.speakerData
  }
  componentDidMount(){
    this.setState({ loading: 'true' })
    this.requestDevice().then((doc)=>{
      this.setState({ 
        loading: 'false',
        data: doc
      })
    }
    ) 
  }
  render() {
    if (this.state.loading === 'init') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }


    if (this.state.loading === 'true') {
      console.log('This happens 5th - when waiting for data.');
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
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Device_ID</th>
                        <th className="text-center">Controller</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.data.map((row) => (
                      <tr key={row.device_id}>
                        <td>{row.device_id}</td>
                        <td><InputSlider idDevice={row.deviceValue} /></td>
                      </tr>
                      ))}
                      
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
