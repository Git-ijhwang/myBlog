import React from "react";
 import "../../node_modules/jquery/dist/jquery.min.js";
// import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js";
import "../css/styles.css";

// const isExpanded;

const  Nav = () => {


//   const setExpanded = ({isExpanded}) => {
//         isExpanded = isExpanded?false:true
//   }

  return (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">

            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Injun Hwang</a>
                <button
                    class="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    // class= {isExpanded? ("collapse navbar-collapse"): ("collapse navbar-collapse-none")}
                    class="collapse navbar-collapse"
                    id="navbarResponsive"
                    // onClick={() => setExpanded(isExpanded)}
                >
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        {/* <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li> */}
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>
        </nav>
  );
}
export default Nav;
