
import React from "react";
import socketIOClient from "socket.io-client";
import "../assets/scss/FarmMap.scss"
import { Card, CardHeader, CardBody, Row, Col, CardTitle } from "reactstrap";
// import 'react-tippy/dist/tippy.css';
// import {
//   Tooltip,
// } from 'react-tippy';
import Tooltip from "@material-ui/core/Tooltip";

// let sensorList = []
const ENDPOINT = "http://localhost:8080";
class Farm_Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'init',
      sensorList: []
    };

    // const socket = socketIOClient(ENDPOINT);
    // socket.on("FromAPI", flag => {
    //   if (flag) {
    //     // this.request().then((res)=>{
    //     //   this.setState({loading: 'true',sensor: res.sensorData});
    //     //   this.setState({loading: 'false'});
    //     // })
    //     // this.setState({ loading: 'true' })
    //     this.request().then((res) => {
    //       res.sensorData.forEach(x => {
    //         if (x._id == "Mois") {
    //           this.setState({ loading: 'true', sensorData: x });
    //           this.setState({ loading: 'false' });
    //         }
    //       })
    //     })
    //   }
    // })
  }

  request = async () => {
    const response = await fetch('/device/sensor');
    const json = await response.json();
    const x = JSON.parse(JSON.stringify(json));
    return x;
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }


  componentDidMount() {
    this.setState({ loading: 'true' })
    this.request().then((res) => {
      res.sensorData.forEach(x => {
        if (x._id == "Mois") {
          this.setState({ sensorData: x });
          this.setState({ loading: 'false' });
        }
      })
      // this.setState({sensorData: res.sensorData});
      // console.log(this.state.sensorData)

    })
  }
  render() {
    if (this.state.loading === 'init') {
      return (
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
      return (
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
    if (this.state.loading === 'false') {
      return (
        <>
          <div className="content">
            <Row>
              <Col md="12">
                <Card className="card-plain">
                  <CardHeader tag="h2">Farm's sensors Map</CardHeader>
                  <CardBody>
                    <div className="container">
                      <div className="map-container">
                        <img src="http://res.cloudinary.com/slzr/image/upload/v1500321012/world-map-1500_vvekl5.png" />
                        <Tooltip
                          title={<span style={{ fontSize: "150%", padding: "20px" }}>
                            {
                              'Sensor: ' + this.state.sensorData._id + ' - Latest Value: ' + this.state.sensorData.value[0]
                            }</span>}
                          placement="top"
                        >
                          <div className="point venezuela tippy"></div>
                        </Tooltip>

                        {/* <div className="point brasil tippy" title="Brasil"></div> */}
                        <div className="point argentina tippy"></div>
                        {/* <div className="point colombia tippy" title="Colombia"></div> */}
                        <div className="point panama tippy"></div>
                        {/* <div className="point mexico tippy" title="Mexico"></div> */}
                        <div className="point usa tippy" ></div>
                        <div className="point arabia tippy" ></div>
                        {/* <div className="point turquia tippy" title="Turquía"></div>      */}
                        <div className="point rusia tippy" ></div>
                        <div className="point china tippy" ></div>
                        {/* <div className="point japon tippy" title="Japon"></div> */}
                        <div className="point australia tippy" ></div>
                      </div>
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
}

export default Farm_Map;
