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
  Col,
  Button
} from "reactstrap";

import EventForm from "../variables/EventForm"
import Axios from "axios"


// const Schedule = [
//   ['Speaker', '10/07/2020', '10:00', '250'],
// ]
class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    this.state = {
      Schedule: [],
      reloadFlag: true
    }
  }

  rerenderParentCallback = async () => {
    console.log("beforequeryCall")
    await this.ScheduleQuery().then(record => {
      let temp = []
      console.log("afterqueryCall")
      console.log(record)
      record.forEach(event => {
        temp.push([event.device_id, event.date, event.duration, event.intensity, event._id])
      })
      this.setState({
        Schedule: temp,
        reloadFlag: (!this.state.reloadFlag)

      })
    console.log("whereAmI")

    });

    // this.forceUpdate();
  }

  ScheduleDelete = (device_id, date, duration, intensity) => {
    Axios.post('/event/delete', { device_id, date, duration, intensity })
  }
  ScheduleQuery = async () => {
    console.log("queryCall")
    // const response = await fetch('/event/all');
    const response = await Axios.post('/event/all');
    const json = await response.data;
    const x = JSON.parse(JSON.stringify(json));
    if (x == "") {
      return
    }
    // console.log(x)
    return x
  }
  componentDidMount() {
    console.log("call this hihi")
    this.ScheduleQuery().then(record => {
      console.log(record)
      let temp = []
      if (record) {
        record.forEach(event => {
          temp.push([event.device_id, event.date, event.duration, event.intensity, event._id])
        })
        this.setState({
          Schedule: temp
        })
      }
    });
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Schedule Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Device_ID</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Intensity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Schedule.map((row) => (
                        <tr key={row[4]}>
                          <td>{row[0]}</td>
                          <td>{row[1]}</td>
                          <td>{row[2]}</td>
                          <td>{row[3]}</td>
                          <td><Button
                            outline
                            size="sm"
                            color="primary"
                            onClick={() => { console.log(row[1] + " " + row[2]) }}
                          >
                            remove</Button></td>

                        </tr>
                      ))}

                    </tbody>
                  </Table>
                </CardBody>
              </Card>
              <EventForm rerenderParentCallback={this.rerenderParentCallback} />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
