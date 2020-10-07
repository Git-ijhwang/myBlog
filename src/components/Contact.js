import React from "react";
import "../css/styles.css";

function Contact() {
  return (
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">I'm wating your contact </h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">
                            
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <a href="https://www.linkedin.com/in/injun-hwang-21a69913b/"> My Linkedin</a>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                        <a class="d-block" href="mailto:hwangij@gmail.com">hwangij@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Contact;