<template>
    <div>
        <footer id="footer" class="fixed-footer bg-dark text-gray-2">
				<div class="container">
					<div class="row">

						<div class="col-md-4">

							<!-- Begin footer text -->
							<div class="footer-text">
								<h4>- Bienvenidos</h4>
								Es para nosotros un placer presentar nuestro estudio creativo MOSS,
								 creemos en el poder de las ideas y entendemos que se puede lograr con ellas.
							</div>
							<!-- End footer text -->

						</div> <!-- /.col -->

						<div class="col-md-4 text-center">

							<!-- Begin footer logo -->
							<div class="footer-logo margin-top-40 margin-bottom-40">
								<router-link to="/"><img src="../static/assets/img/logo-white.png" title="Home" alt="logo"></router-link>
							</div>
							<!-- End footer logo -->

						</div> <!-- /.col -->

						<div class="col-md-4">

							<!-- Begin social buttons -->
							<div class="social-buttons margin-bottom-15">
								<ul>
									<li><nuxt-link to="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on facebook"><i class="fab fa-facebook-f"></i></nuxt-link></li>
									<li><nuxt-link to="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on twitter"><i class="fab fa-twitter"></i></nuxt-link></li>
									<li><nuxt-link to="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on dribbble"><i class="fab fa-dribbble"></i></nuxt-link></li>
									<li><nuxt-link to="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on behance"><i class="fab fa-behance"></i></nuxt-link></li>
									<li><nuxt-link to="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on youtube"><i class="fab fa-youtube"></i></nuxt-link></li>
								</ul>
							</div>
							<!-- End social buttons -->

							<!-- Begin subscribe form -->
							<form id="footer-subscribe-form" class="form-btn-inside">
								<div class="form-group">
									<input type="email" class="form-control no-bg" id="footer-subscribe" name="subscribe" placeholder="Subscribe. Enter your email address..." required="">
									<button class="bg-white" type="submit"><i class="fas fa-envelope"></i></button>
								</div>
							</form>
							<!-- End subscribe form -->

							<!-- Begin copyright -->
							<div class="copyright">
								Copyright 2016 / All rights reserved <br>
							</div>
							<!-- End copyright -->

						</div> <!-- /.col -->

					</div> <!-- /.row -->
				</div> <!-- /.container -->

				<!-- Scroll to top button -->
			
				

			</footer>
    </div>
</template>
