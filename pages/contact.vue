<template>
<div>
	<body class="pace-done">
		<div id="header">
			<div id="logo">
				<nuxt-link to="/">
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
									style="background-image: url('/assets/img/world-map.jpg'); background-position: 50% 50%;"
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
									<form id="contact-form"
									v-on:submit.prevent="sendEmail()"
									>
										<div class="contact-form-inner">
											<div class="contact-form-info">
												<h1><strong>TrabajeMOSS juntos</strong></h1>
												<p>Para empezar a crear ideas y darle vida a esos proyectos que marcarán la diferencia, contáctanos.</p>
											</div>
											<input type="hidden" name="project_name" value="yourwebsiteaddress.com" />
											<input type="hidden" name="admin_email" value="your@email.com" />
											<input type="hidden" name="form_subject" value="Message from yourwebsiteaddress.com" />
											<div class="row">
												<div class="col-lg-6">
													<div class="form-group">
														<input type="text" class="form-control" name="name" placeholder="Nombre" v-model="nombre" required />
													</div>
												</div>
												<div class="col-lg-6">
													<div class="form-group">
														<input type="email" class="form-control" name="email" placeholder="Telefono" v-model="subject" required />
													</div>
												</div>
											</div>
											<div class="row">
												<div class="col-lg-12">
													<div class="form-group">
														<input type="text" class="form-control" name="subject" placeholder="Email" v-model="email" required />
													</div>
												</div>
											</div>
											<div class="row margin-top-20">
												<div class="col-lg-12">
													<div class="form-group">
														<textarea
															v-model="message"
															class="form-control"
															name="message"
															rows="4"
															placeholder="Mensaje"
															required
														></textarea>
													</div>
												</div>
											</div>
											<div class="form-group">
												<div class="form-check">
													<input class="form-check-input" @click="validate()" type="checkbox" value="" id="invalidCheck" required>
													<label class="form-check-label">
														Acepto terminos y condiciones.<a href="#" @click="open"> click aqui</a>
													</label>
													</div>
												</div>
											<div class="small text-gray margin-top-40">
												<p v-if="msj">{{resp}}</p>
											</div>
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
			<!-- Modal -->
			<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h3 style="width: 400px">Tratamiento de mis datos personales</h3>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<p>Ley Estatutaria 1581 de 2012 de Protección de Datos y normas, Moss Creativo S.A.S le informa al usuario que los datos obtenidos en este formulario serán incorporados en una base de datos tratados con finalidad netamente comercial.</p>
				</div>

				</div>
			</div>
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
	data() {
		return {
			dialogVisible: false,
			nombre:null,
			email: null,
			subject: null,
			message:null,
			resp: null,
			msj:false,
			valid: false
		}
	},
	methods:{

		open() {
        this.$alert('Ley Estatutaria 1581 de 2012 de Protección de Datos y normas, Moss Creativo S.A.S le informa al usuario que los datos obtenidos en este formulario serán incorporados en una base de datos tratados con finalidad netamente comercial.', 'Tratamiento de mis datos personales. ', {
          confirmButtonText: 'Ok',
          callback: action => {
          }
        });
      },
		respuesta(){

			this.resp='Datos Enviados!'
			this.msj =true;
			setTimeout(
			() => {
				this.msj=false;
			},5000)
		},
		sendEmail() {
			const url='https://script.google.com/macros/s/AKfycbyF-nDiuu5AB11FWXn38_lPIg6_dVvokSkzHBIa3MaLoK-ypIE/exec?nombre='+this.nombre+'&&email='+this.email+'&&tema='+this.subject+'&&mensaje='+this.message
			// const ventana =window.open(url,'','width=200,height=100');

			//  setTimeout(function closeWin() { ventana.close()}, 5000);
			 fetch('https://cors-anywhere.herokuapp.com/'+url)
				.then((response)=> {
					this.respuesta();
					return response.json();

				})
				.then(function(myJson) {
					console.log(myJson);
				});
		},
		validate(){
			this.valid = true;
		}

	},
	mounted() {
		window.dispatchEvent(new Event('resize'));
	},
	components: {
		footerPage,
		menuPage
	}
};
</script>
