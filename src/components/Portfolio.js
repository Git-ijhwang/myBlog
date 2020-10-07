import React from "react";
import Sub from "./SubPortfolio";
import "../css/styles.css";

import img1 from "../assets/img/laravel.png";
import img2 from "../assets/img/react.png";
import img3 from "../assets/img/blog.png";
import img3_1 from "../assets/img/blog.gif";
import img4 from "../assets/img/jobfair.png";
import { MagnificPopup } from 'react-magnific-popup'


$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
})

// "./assets/img/laravel.png";
function Portfolio() {
  return (
    <div id="portfolio">
      <div class="container-fluid p-0">
        <div class="row no-gutters parent-container">
          <Sub name="My Blog" category="React" src={img3} src2={img3_1} />
          <Sub name="NSCC Job Fair Project" category="Laravel" src={img4} />
          <Sub name="Laravel" category="Laravel" src={img1} />
          <Sub name="React" category="React" src={img2} />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
