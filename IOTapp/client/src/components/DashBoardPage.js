import React from "react";
import "../assets/now-ui-kit.css"
import "../assets/bootstrap.min.css"
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

//REUSE 
// Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus

// core components
import HeaderPage from "./HeaderPage";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="wrapper">
        <div>
          <HeaderPage />
        </div>
        
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">What is new ?</h2>
                <h5 className="description">
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(https://image.freepik.com/free-photo/statistic-documents-with-businessman-blurred-background_1098-293.jpg)"
                    }}
                  >
                    <p className="blockquote blockquote-info" style={{fontFamily: 'Montserrat'}}>
                      "Pellentesque habitant morbi tristique fames ac turpis egestas. " <br></br>
                      <br></br>
                      <small>- PAT2H TEAM</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(https://image.freepik.com/free-photo/businessman-holding-smart-city-user-interface-with-icon-stats-data-3d-rendering_110893-839.jpg)"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(https://image.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg)"
                    }}
                  ></div>
                  <h3 style={{fontFamily: 'Montserrat'}}>
                  Pellentesque habitant morbi 
                  </h3>
                  <p style={{fontFamily: 'Montserrat', textAlign: "justify"}}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  </p>
                  <p style={{fontFamily: 'Montserrat', textAlign: "justify"}}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  </p>
                  <p style={{fontFamily: 'Montserrat', textAlign: "justify"}}>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. 
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title" style={{marginBottom: "70px"}}>Here is our team</h2>

            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/ava.jpg")}
                    ></img>
                    <h4 className="title">Nguyen Ngoc Phat</h4>
                    <p className="category text-info">Dev 1</p>
                    <p className="description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/ava.jpg")}
                    ></img>
                    <h4 className="title">Do Van Toan</h4>
                    <p className="category text-info">Dev 2</p>
                    <p className="description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/ava.jpg")}
                    ></img>
                    <h4 className="title">Nguyen Trong Anh</h4>
                    <p className="category text-info">Dev 3</p>
                    <p className="description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </div>
            <div className="team" >
              <Row className="justify-content-center">
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/ava.jpg")}
                    ></img>
                    <h4 className="title">Vo Xuan Hau</h4>
                    <p className="category text-info">Dev 4</p>
                    <p className="description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("../assets/img/ava.jpg")}
                    ></img>
                    <h4 className="title">Le Hiep</h4>
                    <p className="category text-info">Dev 5</p>
                    <p className="description">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        
      </div>
    </>
  );
}

export default LandingPage;
