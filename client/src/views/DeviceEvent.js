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


const Schedule = [
  ['Speaker', '10/07/2020', '10:00', '250'],
]
class Tables extends React.Component {
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
                      {Schedule.map((row) => (
                      <tr key={row[0]}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td><Button 
                              outline 
                              size="sm" 
                              color="primary"
                              onClick={()=> {console.log(row[1] +" "+ row[2] )}}
                            >
                            remove</Button></td>

                      </tr>
                      ))}
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
              <EventForm />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
