import React from "react";

function Slider(){

    return(
      
     <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" alt="First slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://itcraftapps.com/wp-content/uploads/2019/09/Top-Apps-built-with-React-Native.png" alt="Second slide"></img>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://proxsisgroup.com/wp-content/uploads/2019/09/React-JS-Logo-1024x576.png" alt="Third slide"></img>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    );
};
export default Slider; 