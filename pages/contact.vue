<template>
<div>
  <body class="pace-done">
    <!-- ===================
		///// Begin header /////
    ====================-->
    <div id="header">
      <!-- Begin logo
      ================-->
      <div id="logo">
        <nuxt-link to="index">
          <img src="assets/img/logo-white.png" title="Home" alt="logo" />
        </nuxt-link>
      </div>
      <menuPage />
    </div>
    <!-- End header -->

    <!-- *************************************
		*********** Begin body content *********** 
    **************************************-->
    <div id="body-content">
      <!-- Begin content container -->
      <div id="content-container" style="margin-bottom: 363px;">
        <!-- ========================
				///// Begin page header /////
        =========================-->
       
              <section id="page-header" data-percent-height="0.9">

					<!-- Begin page header image -->
					<div class="page-header-image parallax fade-out-scroll-6 bg-image" style="background-image: url('assets/img/page-header/page-header-bg-12.jpg'); background-position: 50% 50%;">

						<!-- Begin page header caption -->
						<div class="page-header-caption">
							<h1 class="page-header-title">Contact</h1>
						</div>
						<!-- End page header caption -->

						<!-- Begin scroll down button -->
						<nuxt-link to="contact#contact-section" class="scroll-down sm-scroll hide-from-sm" title="Scroll down"></nuxt-link>
						<!-- End scroll down button -->

					</div>
					<!-- End page header image -->

				</section>  	
        <!-- End page header -->

        <!-- ========================================
				///// Begin split box section (contact) /////
				based on: http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height
        =========================================-->
        <section id="contact-section" class="split-box">
          <div class="container-fluid">
            <div class="row">
              <div class="row-md-height">
                <!-- Column -->
                <div
                  class="col-md-6 col-md-height col-md-middle bg-dark bg-image"
                  style="background-image: url('assets/img/world-map.png'); background-position: 50% 50%;"
                >
                  <!-- Begin contact info -->
                  <div class="contact-info-wrap">
                    <div class="contact-info">
                      <p>
                        <i class="fas fa-home"></i> address: 121 King Street, Melbourne, Australia
                      </p>
                      <p>
                        <i class="fas fa-phone"></i> phone: +123 456 789 000
                      </p>
                      <p>
                        <i class="fas fa-envelope"></i> email:
                        <nuxt-link to="mailto:company@email.com" target="_blank">company@email.com</nuxt-link>
                      </p>
                    </div>

                    <!-- Begin social buttons -->
                    <div class="social-buttons margin-top-20">
                      <ul>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on facebook"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on twitter"
                          >
                            <i class="fab fa-twitter"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on dribbble"
                          >
                            <i class="fab fa-dribbble"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on behance"
                          >
                            <i class="fab fa-behance"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on linkedin"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link
                            to="contact#"
                            class="btn btn-social-min btn-primary-bordered btn-rounded-full"
                            target="_blank"
                            title="Follow us on youtube"
                          >
                            <i class="fab fa-youtube"></i>
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                    <!-- End social buttons -->
                  </div>
                  <!-- End contact info -->
                </div>
                <!-- /.col -->

                <!-- Column -->
                <div class="col-md-6 col-md-height">
                  <!-- Begin contact form 
                  =========================-->
                  <form id="contact-form">
                    <div class="contact-form-inner">
                      <div class="contact-form-info">
                        <h2>- Get In Touch -</h2>
                        <p>Sollicitudin diam vitae, amet lacus donec eu, donec vulputate duis nullam nulla, suscipit nulla orci, ornare maecenas eget gravida. Curae sollicitudin lobortis.</p>
                      </div>

                      <!-- Begin hidden required fields (https://github.com/agragregra/uniMail) -->
                      <input type="hidden" name="project_name" value="yourwebsiteaddress.com" />
                      <!-- Change value to your site name -->
                      <input type="hidden" name="admin_email" value="your@email.com" />
                      <!-- Change value to your valid email address (where a message will be sent) -->
                      <input
                        type="hidden"
                        name="form_subject"
                        value="Message from yourwebsiteaddress.com"
                      />
                      <!-- Change value to your own message subject -->
                      <!-- End Hidden Required Fields -->

                      <div class="row">
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row margin-top-20">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              name="message"
                              rows="4"
                              placeholder="Your Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div class="small text-gray margin-top-40">
                        <em>* All fields are required!</em>
                      </div>
                    </div>
                    <!-- /.contact-form-inner -->

                    <div class="row">
                      <div class="col-lg-12 no-padding">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block no-margin padding-40"
                        >Send Message</button>
                      </div>
                    </div>
                  </form>
                  <!-- End contact form -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row-height -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </section>
        <!-- End split box section -->

     
      </div>
      <!-- End content container -->

      <!-- ===================
			///// Begin footer /////
			========================
			* Use class "fixed-footer" to enable fixed footer (no effect on small devices).
      -->
      <footerPage />
      <!-- End footer -->
    </div>
    <!-- End body content -->
  </body>
</div>
</template>
<script>
import footerPage from "../components/footer";
import menuPage from "../components/headerMenu";
export default {
  mounted() {

      window.dispatchEvent(new Event("resize"));
  },
  components: {
    footerPage,
    menuPage
  }
};
</script>