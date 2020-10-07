import React from "react";
import "../css/styles.css";

function SubPortfolio({ name, category, src, src2 }) {
  return (
    <div class="col-lg-4 col-sm-6">
      {/* <a class="portfolio-box" href={src2}> */}
      <a class="test-popup-link" href={src2} >

        <img class="img-fluid" src={src} alt="" />

        <div class="portfolio-box-caption">
          <div class="project-category text-white-50">{category}</div>
          <div class="project-name">{name}</div>
        </div>

      </a>
    </div>
  );
}

export default SubPortfolio;
