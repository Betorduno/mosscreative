<template>
<div>
	<body>
		<div id="global-search" class="gl-s gls-simple">
			<!-- Begin global search close button -->
			<div class="global-search-close-wrap">
				<a href="portfolio-single-3.html#0" class="global-search-close" title="Close">
					<i class="fas fa-close"></i>
				</a>
			</div>
			<!-- End global search close button -->

			<!-- Begin global search form -->
			<form id="global-search-form" method="get" action="search-results-2.html">
				<input
					type="text"
					class="form-control"
					id="global-search-input"
					name="search"
					placeholder="Type your keywords..."
				/>
			</form>
			<!-- End global search form -->
		</div>
		<!-- End global search -->

		<!-- ===================
		///// Begin header /////
		====================-->
		<div id="header">
			<!-- Begin logo
			================-->
			<div id="logo">
				<nuxt-link to="/">
					<img src="../../static/assets/img/logo-black.png" title="Home" alt="logo" />
				</nuxt-link>
			</div>
			<!-- End logo -->

			<!-- =================
			///// Begin menu /////
			======================
			* Use class "slide-left", "slide-left-half", "slide-right", "slide-right-half", "slide-top", "slide-bottom" or "zoom-in" to change menu effect.
			-->
			<menuPage/>
		</div>
		<!-- End header -->

		<!-- *************************************
		*********** Begin body content ***********
		**************************************-->
		<div id="body-content">
			<!-- Begin content container -->
			<div id="content-container">
				<!-- ========================
				///// Begin page header /////
				=========================-->
				<pageHeader v-if="projects.length>0" :projects="projects"/>
				<!-- End page header -->

				<!-- ==================================
				///// Begin portfolio single info /////
				===================================-->
				<pageInfo v-if="projects.length>0" :projects="projects"/>
				<!-- End portfolio single info -->

				<!-- =====================================
				///// Begin portfolio single gallery /////
				======================================-->
				<pageGallery v-if="projects.length>0" :projects="projects"/>
				<!-- End portfolio single gallery -->

				<!-- ===================================
				///// Begin call to action section /////
				====================================-->
				<pageNext v-if="projects.length>0" :projects="projects"/>
				<!-- End call to action section -->

				<!-- =====================================================
				///// Begin portfolio single nav (Next/Prev project) /////
				======================================================-->
				<pageNt v-if="projects.length>0 && datos.length>0" :projects="projects" :datos ="datos"/>
				<!-- End portfolio single nav -->
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
	</body>
</div>
</template>
<script>
import contentful from '../../plugins/contentful';
import footerPage from "../../components/footer";
import menuPage from '../../components/headerMenu';
import pageHeader from '../../components/portfolioTwo/portfolioTwoHeader';
import pageInfo from '../../components/portfolioTwo/portfolioTwoInfo';
import pageGallery from '../../components/portfolioTwo/portfolioTwoGallery';
import pageNt from '../../components/portfolioTwo/portfolioTwoNt';
import pageNext from '../../components/portfolioTwo/portfolioTwoNext';
export default {
	data() {
		return {
			projects: [],
			datos:[]
		};
	},
	components: {
		footerPage,
		menuPage,
		pageHeader,
		pageInfo,
		pageGallery,
		pageNext,
		pageNt
	},
	methods: {
		async getData() {
			let id = this.$route.params.id2;
			let response = await contentful.getEntry(id);
			this.projects = Object.values(response);
		},
		async getNext() {
			let response= await contentful.getEntries({ content_type: "projects" })
			this.datos= response.items;
    }
	},
	mounted() {
		this.getData();
		this.getNext();
		window.dispatchEvent(new Event('resize'));
	}
};
</script>
