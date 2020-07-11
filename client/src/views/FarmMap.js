
import React from "react";
import "../assets/scss/FarmMap.scss"
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
// import 'react-tippy/dist/tippy.css';
// import {
//   Tooltip,
// } from 'react-tippy';
import Tooltip from "@material-ui/core/Tooltip";

let sensorList = []

class Farm_Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'init'
    };
  }
  componentDidMount(){
    this.setState({ loading: 'true' })
    sensorList.push("sensorMois")
    this.setState({ loading: 'false' })
  }
  render() {
    if (this.state.loading === 'init') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }


    if (this.state.loading === 'true') {
      console.log('This happens 5th - when waiting for data.');
      return <h2>Loading...</h2>;
    }
    if(this.state.loading === 'false'){
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
                          title= {<span style={{fontSize:"150%", padding:"20px"}}>{sensorList[0]}</span>}
                          placement="top"
                        >
                          <div className="point venezuela tippy"></div>
                        </Tooltip>
                        
                        {/* <div className="point brasil tippy" title="Brasil"></div> */}
                        <div className="point argentina tippy" title="Argentina"></div>
                        {/* <div className="point colombia tippy" title="Colombia"></div> */}
                        <div className="point panama tippy" title="Panamá"></div>
                        {/* <div className="point mexico tippy" title="Mexico"></div> */}
                        <div className="point usa tippy" title="Estados Unidos"></div>
                        <div className="point arabia tippy" title="Arabia Saudi"></div>
                        {/* <div className="point turquia tippy" title="Turquía"></div>      */}
                        <div className="point rusia tippy" title="Rusia"></div>
                        <div className="point china tippy" title="China"></div>
                        {/* <div className="point japon tippy" title="Japon"></div> */}
                        <div className="point australia tippy" title="Australia"></div>
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
