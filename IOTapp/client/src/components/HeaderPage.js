import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import "../asset/now-ui-kit.css"

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            // backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
            // backgroundImage: "url(" + "https://image.freepik.com/free-photo/futuristic-robot-artificial-intelligence-concept_31965-6165.jpg" +")",
            background: "linear-gradient(rgba(79, 188, 255, 0.9), rgba(79, 188, 255, 0.3)), url(https://image.freepik.com/free-photo/global-network-concept-iot-internet-things_34629-697.jpg) center",
            backgroundSize: "cover"
            
            
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <img src= {require("./logoPAT2H.png")} alt="Italian Trulli" 
              style={{
                width: "200px",
                paddingBottom: "10px"
              }}
            />
            <hr 
              style={{
                border: "0.1px solid white",
                width: "500px"
              }}
            />
            <h1 className="title">Smart Farm Management</h1>  
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
