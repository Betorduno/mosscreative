<template>
	<div>
				<body class="pace-done">
			<div class="pace pace-inactive">
				<div class="pace-progress" data-progress-text="100%" data-progress="99" style="transform: translate3d(100%, 0px, 0px);">
  				<div class="pace-progress-inner">
			</div>
			</div>
			<div class="pace-activity"></div></div>
			<div id="global-search" class="gl-s gls-simple">

				<!-- Begin global search close button -->
				<div class="global-search-close-wrap">
					<nuxt-link to="" class="global-search-close" title="Close">
						<i class="fas fa-close"></i>
					</nuxt-link>
				</div>
				<!-- End global search close button -->

				<!-- Begin global search form -->
				<form id="global-search-form" method="get" action="search-results-2.html">
					<input type="text" class="form-control" id="global-search-input" name="search" placeholder="Type your keywords...">
				</form>
				<!-- End global search form -->

			</div>
			<!-- End global search -->


			<!-- ===================
			///// Begin header /////
			==================== -->
			<div id="header">

				<!-- Begin logo
				================ -->
				<div id="logo">
					<nuxt-link to="/"><img :src="logoBlack" title="Home" alt="logo"></nuxt-link>
				</div>
				<!-- End logo -->
				<menuPage/>
			</div>
			<!-- End header -->


			<!-- *************************************
			*********** Begin body content ***********
			************************************** -->
			<div id="body-content">

				<!-- Begin content container -->
				<div id="content-container" style="margin-bottom: 363px;">

					<!-- ========================
					///// Begin page header /////
					========================= -->
					<section id="page-header" data-percent-height="0.99">

						<!-- Begin page header image -->
						<div class="page-header-image parallax fade-out-scroll-6 bg-image" style="background-image: url('/assets/img/page-header/page-header-bg-25.jpg'); background-position: 50% 20%;">

							<!-- Begin page header caption -->
							<!-- <div class="page-header-caption">
								<h1 class="page-header-title">MossCreativo</h1>
								<div class="page-header-sub-title-wrap">
									<h2 class="page-header-sub-title">
										Who I Am.
									</h2>
								</div>
							</div> -->
							<!-- End page header caption -->

							<!-- Begin scroll down button -->
							<a href="/somoss#who-i-am" class="scroll-down sm-scroll hide-from-sm" title="Scroll down"></a>
							<!-- End scroll down button -->

						</div>
						<!-- End page header image -->

					</section>
					<!-- End page header -->


					<!-- =========================================
					///// Begin split box section (Who I Am) /////
					based on: http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height
					========================================== -->
					<section id="who-i-am" class="split-box">
						<div class="container-fluid">
							<div class="row">
								<div class="row-md-height">

									<!-- Column (use class "cover-left" or "cover-right" to enable image cover) -->
									<div class="col-md-6 col-md-height split-box-image no-padding bg-image" style="background-image: url('/assets/img/team/team-6.jpg'); background-position: 50% 50%;">

										<!-- Split box image height
										============================
										* You can use prepared "padding-height-*" helper classes to set split box image height. Example: "padding-height-85" (useful if "split-box-content" contend/text is very short). Find out "helper.css" file for more info.
										* Note: class "sbi-height" is required.
										-->
										<div class="sbi-height padding-height-85"></div>

									</div> <!-- /.col -->

									<!-- Column -->
									<div class="col-md-6 col-md-height col-md-middle">

										<!-- Begin split box content -->
										<div class="split-box-content">
											<div class="bg-transparent-6-white padding-30">
												<h1 >- <span style="color: ##516d51;"> <strong >SoMOSS</strong></span></h1>
												<p>Un equipo que hace parte de un proceso creativo, plasmamos tus ideas y trabajamos juntos para que tus proyectos se hagan realidad. Esto es lo que nos apasiona, transformar lo que necesitas para tu empresa, con el mejor servicio y calidad. Lo hacemos a través de branding, packaging, piezas gráficas y soluciones web.
												</p>
												<p>
													<strong>¿Crecemos ideas juntos?</strong>
												</p>
												<nuxt-link to="contact" class="btn btn-dark-bordered margin-top-20">Contáctanos</nuxt-link>
											</div>
										</div>
										<!-- End split box content -->

									</div> <!-- /.col -->
								</div> <!-- /.row-height -->
							</div> <!-- /.row -->
						</div> <!-- /.container -->
					</section>

					<!-- End split box section -->

				</div>
				<!-- End content container -->


			<footerPage/>


			</div>
			<!-- End body content -->
		</body>
	</div>
</template>
<script>
import footerPage from '../components/footer'
import menuPage from '../components/headerMenu'
import logoBlack from "../static/assets/img/logo-white.png"

export default {
    components:{
        footerPage,
        menuPage
	},
	data () {
		return {
			logoBlack
		}
	},
	mounted(){
		window.dispatchEvent(new Event("resize"));
	}
}
</script>
