import React from "react";
import "../css/styles.css";

function About() {
  return (
    <section class="page-section bg-primary" id="about">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="text-white mt-0">
              What I can do
              </h2>
            <hr class="divider light my-4" />

            <h4 class="text-white mt-0">
              Web Progromming
            </h4>
            <p class="text-white-50 mb-4">
                  Laravel<br/>
                  React<br/>
                  Angular<br/>
                  PHP<br/>
                  Python<br/>
            </p>

            <h4 class="text-white mt-0">
              Other Skills
            </h4>
            <p class="text-white-50 mb-4">
              TCP/IP Network<br/>
              Protocol Analyze<br/>
              Cellular Network (LTE/5G) Development Experience<br/>
            </p>
            {/* <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">
              Get Started!
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
