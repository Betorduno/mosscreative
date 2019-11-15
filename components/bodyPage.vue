<template>
  <div>
   	  

		<div id="global-search" class="gl-s">
			
			<!-- Begin global search close button -->
			<div class="global-search-close-wrap">
				<a href="index.html#0" class="global-search-close" title="Close">
					<i class="fas fa-close"></i>
				</a>
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
		<headerPage :logoType="logoType"/>
		<!-- End header -->

		<!-- *************************************
		*********** Begin body content *********** 
		************************************** -->
		<div id="body-content">

			<!-- Begin content container -->
			<div id="content-container">

				<!-- ==============================
				///// Begin intro (slideshow) /////
				=============================== -->
				<Intro @changeSlider="changeSlider($event)"/>
				<!-- End intro -->
				<!-- ===================================
				///// Begin portfolio list section /////
				==================================== -->
				<portfolioPage/>
				<!-- End section -->

			</div>
			<!-- End content container -->


			<!-- ===================
			///// Begin footer /////
			========================
			* Use class "fixed-footer" to enable fixed footer (no effect on small devices).
			-->
			<footerPage/>
			<!-- End footer -->


		</div>
		<!-- End body content -->
  </div>
</template>
<script>
import contentful from '@/plugins/contentful.js';
import headerPage from '../components/headerPage';
import Intro from '../components/Intro';
import portfolioPage from '../components/portfolioPage';
import footerPage from '../components/footer';
import logoBlanco from '../static/assets/img/logo-white.png';
import logoNegro from '../static/assets/img/logo-black.png';

export default {
	
  data () {
	  return {
		  items: [], 
		  logoType: false
	  }
  },
  components:{
	  headerPage,
	  Intro,
	  portfolioPage,
	  footerPage

	
  },
  mounted () {
    contentful.getEntries({ 'content_type': 'contacts' })
      .then((res) => {
		  this.items = res.items
	  })
	  .catch(error => {
		  alert(error)
	  })
  	},
  	methods: {
		changeSlider (event) {
			if(event == true){
				this.logoType = logoNegro
			
			} else{
				this.logoType = logoBlanco
			}
		}
	}
}

</script>
