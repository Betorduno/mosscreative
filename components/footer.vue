<template>
	<div>
		<footer id="footer" class="fixed-footer bg-dark text-gray-2">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<!-- Begin footer text -->
						<div class="footer-text">
							<h4>- Bienvenidos</h4>Es para nosotros un placer presentar nuestro estudio
							creativo MOSS, creemos en el poder de las ideas y
							entendemos que se puede lograr con ellas.
						</div>
						<!-- End footer text -->
					</div>
					<!-- /.col -->

					<div class="col-md-4 text-center">
						<!-- Begin footer logo -->
						<div class="footer-logo margin-top-40 margin-bottom-40">
							<router-link to="/">
								<img src="../static/assets/img/logo-white.png" title="Home" alt="logo" />
							</router-link>
						</div>
						<!-- End footer logo -->
					</div>
					<!-- /.col -->

					<div class="col-md-4">
						<!-- Begin social buttons -->
						<div class="social-buttons margin-bottom-15">
							<ul>
								<li>
									<a
										href="https://www.instagram.com/moss.creativo/"
										class="btn btn-primary btn-link"
										target="_blank"
										title="Follow us on facebook"
									>
										<i class="fab fa-instagram"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.behance.net/pipe-toro"
										class="btn btn-primary btn-link"
										target="_blank"
										title="Follow us on behance"
									>
										<i class="fab fa-behance"></i>
									</a>
								</li>
							</ul>
						</div>
						<!-- End social buttons -->

						<!-- Begin subscribe form -->
						<form
							method="get"
							id="footer-subscribe-form"
							v-on:submit.prevent="sendEmail()"
							class="form-btn-inside"
						>
							<div class="form-group">
								<input
									v-model="email"
									type="email"
									class="form-control no-bg"
									id="email"
									name="email"
									placeholder="Suscribete. Ingresa tu email..."
									required
								/>
								<button class="bg-white" type="submit">
									<i class="fas fa-envelope"></i>
								</button>
							</div>

						</form>
						<p v-if="msj">{{resp}}</p>
						<!-- End subscribe form -->

						<!-- Begin copyright -->
						<div class="copyright">
							Copyright 2020 / All rights reserved
							<br />
						</div>
						<!-- End copyright -->
					</div>
					<!-- /.col -->
				</div>
				<!-- /.row -->
			</div>
			<!-- /.container -->

			<!-- Scroll to top button -->
		</footer>
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: '',
			resp: null,
			msj:false
		};
	},
	methods: {
		respuesta(){

			this.resp='Muy bien, te has suscrito!'
			this.msj =true;
			setTimeout(
			() => {
				this.msj=false;
			},5000)
		},
		sendEmail() {
			const url='https://script.google.com/macros/s/AKfycbxQAmyCuhG8eM4AY015gz-bclYNgXUGZIRVMVwpG4SD8NIdyBU/exec?email='+ this.email;
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
		}

	}
};
</script>
