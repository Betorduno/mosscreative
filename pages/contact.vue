<template>
<div>
	<body class="pace-done">
		<div id="header">
			<div id="logo">
				<nuxt-link to="index">
					<img src="/assets/img/logo-white.png" title="Home" alt="logo" />
				</nuxt-link>
			</div>
			<menuPage />
		</div>
		<div id="body-content">
			<div id="content-container" style="margin-bottom: 363px;">
				<section id="page-header" data-percent-height="0.9">
					<div
						class="page-header-image parallax fade-out-scroll-6 bg-image"
						style="background-image: url('/assets/img/page-header/page-header-bg-12.jpg'); background-position: 50% 50%;"
					>
						<div class="page-header-caption">
							<h1 class="page-header-title">Contacto</h1>
						</div>
						<nuxt-link
							to="contact#contact-section"
							class="scroll-down sm-scroll hide-from-sm"
							title="Scroll down"
						></nuxt-link>
					</div>
				</section>
				<section id="contact-section" class="split-box">
					<div class="container-fluid">
						<div class="row">
							<div class="row-md-height">
								<div
									class="col-md-6 col-md-height col-md-middle bg-dark bg-image"
									style="background-image: url('/assets/img/world-map.png'); background-position: 50% 50%;"
								>
									<div class="contact-info-wrap">
										<div class="contact-info">
											<p>
												<i class="fas fa-home"></i> Direcciòn: Cra 32D #9-17
											</p>
											<p>
												<i class="fas fa-phone"></i> Celular: +57 3004884331
											</p>
											<p>
												<i class="fas fa-envelope"></i> Email:
												<a to="mailto:info@mosscreativo.com" target="_blank">info@mosscreativo.com</a>
											</p>
										</div>
										<div class="social-buttons margin-top-20">
											<ul>
												<li>
													<a
														href="https://www.instagram.com/moss.creativo/"
														class="btn btn-social-min btn-primary-bordered btn-rounded-full"
														target="_blank"
														title="Follow us on facebook"
													>
														<i class="fab fa-instagram"></i>
													</a>
													<a
														href="https://www.behance.net/pipe-toro"
														class="btn btn-social-min btn-primary-bordered btn-rounded-full"
														target="_blank"
														title="Follow us on facebook"
													>
														<i class="fab fa-behance"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-md-height">
									<form id="contact-form">
										<div class="contact-form-inner">
											<div class="contact-form-info">
												<h2>- Get In Touch -</h2>
												<p>Sollicitudin diam vitae, amet lacus donec eu, donec vulputate duis nullam nulla, suscipit nulla orci, ornare maecenas eget gravida. Curae sollicitudin lobortis.</p>
											</div>
											<input type="hidden" name="project_name" value="yourwebsiteaddress.com" />
											<input type="hidden" name="admin_email" value="your@email.com" />
											<input type="hidden" name="form_subject" value="Message from yourwebsiteaddress.com" />
											<div class="row">
												<div class="col-lg-6">
													<div class="form-group">
														<input type="text" class="form-control" name="name" placeholder="Nombre" required />
													</div>
												</div>
												<div class="col-lg-6">
													<div class="form-group">
														<input type="email" class="form-control" name="email" placeholder="Email" required />
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12">
													<div class="form-group">
														<input type="text" class="form-control" name="subject" placeholder="Tema" required />
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
															placeholder="Tu mensaje"
															required
														></textarea>
													</div>
												</div>
											</div>
											<div class="small text-gray margin-top-40"></div>
										</div>
										<div class="row">
											<div class="col-lg-12 no-padding">
												<button
													type="submit"
													class="btn btn-primary btn-block no-margin padding-40"
												>Enviar Mensaje</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<footerPage />
		</div>
	</body>
</div>
</template>
<script>
import footerPage from '../components/footer';
import menuPage from '../components/headerMenu';
export default {
	mounted() {
		window.dispatchEvent(new Event('resize'));
	},
	components: {
		footerPage,
		menuPage
	}
};
</script>
