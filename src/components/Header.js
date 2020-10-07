import React from "react";
import "../css/styles.css";

function Header() {
  return (
    <header class="masthead" id="page-top">
      <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-center text-center">
          <div class="col-lg-10 align-self-end">
            <h1 class="text-uppercase text-white font-weight-bold">
              Injun Hwang
            </h1>
            <hr class="divider my-4" />
          </div>
          <div class="col-lg-8 align-self-baseline">
            <p class="text-white-75 font-weight-light mb-5">
              I feel happy when I develop. I believe that people who work in IT
              industry our world. I also hope I can improve the world through my
              job. Now I believe I can achieve my dream here in new environment.
            </p>

            <a
              class="btn btn-primary btn-xl js-scroll-trigger"
              href="#portfolio"
            >
              My Works
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
