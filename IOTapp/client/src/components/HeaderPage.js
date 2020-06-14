import React from "react";
import { Button, Container } from "reactstrap";
import "../assets/now-ui-kit.css"

function HeaderPage() {
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

      <div className="page-header page-header-small" style={{
          minHeight: "120vh",
          maxHeight: "640px",
           }}>
        <div
          className="page-header-image"
          style={{
            // backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
            // backgroundImage: "url(" + "https://image.freepik.com/free-photo/futuristic-robot-artificial-intelligence-concept_31965-6165.jpg" +")",
            // background: "linear-gradient(rgba(79, 188, 255, 0.9), rgba(79, 188, 255, 0.3)), url(https://image.freepik.com/free-photo/global-network-concept-iot-internet-things_34629-697.jpg) center",
            display: "block",
            background: "linear-gradient(rgba(79, 188, 255, 0.9), rgba(79, 188, 255, 0.3)), url(https://csengineermag.com/wp-content/uploads/2020/04/AdobeStock_302399784.jpeg) center",
            backgroundAttachment :"fixed",
            backgroundSize: "cover",
            // height: "800px",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <img src= {require("./logoPAT2H.png")} alt="Italian Trulli" 
              style={{
                width: "350px",
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
      <div style={{
          minHeight: "60vh",
          maxHeight: "640px",
          position: "relative",
           }}>

           <img src={require("./DADN_PNG1.png")} alt="aa" 
            style={{
            // position: "absolute",
            display: "block",
            width: "60%",
            paddingBottom: "10px",
            zIndex: "3",
            margin: "-100px auto 0 auto"
          }}
        />
      </div>
      
      
    </>
  );
}

export default HeaderPage;

