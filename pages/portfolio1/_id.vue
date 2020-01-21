<template>
  <div>
    <!-- Begin global search (simple)
		==================================
		* Use class "gl-search-dark" to enable global search dark style.
    -->
    <div id="global-search" class="gl-s gls-simple">
      <!-- Begin global search close button -->
      <div class="global-search-close-wrap">
        <nuxt-link to="" class="global-search-close" title="Close">
          <i class="fas fa-close"></i>
        </nuxt-link>
      </div>
      <!-- End global search close button -->

      <!-- Begin global search form -->
      <form id="global-search-form" method="get" action="">
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
	<div id="header">
			<!-- Begin logo
			================-->
			<div id="logo">
				<nuxt-link to="/">
					<img src="../../static/assets/img/logo-white.png" title="Home" alt="logo" />
				</nuxt-link>
			</div>
			<!-- End logo -->

			<!-- =================
			///// Begin menu /////
			======================
			* Use class "slide-left", "slide-left-half", "slide-right", "slide-right-half", "slide-top", "slide-bottom" or "zoom-in" to change menu effect.
			-->

  			  <headerPage/>
		</div>


    <div id="body-content">
      <!-- Begin content container -->
      <div id="content-container">

        <pageOneHeader v-if="projects.length>0" :projects="projects"/>

        <pageOneInfo v-if="projects.length>0" :projects="projects"/>

        <pageOneGallery v-if="projects.length>0" :projects="projects"/>

        <pageOneAction v-if="projects.length>0" :projects="projects" />

        <pageOneNext v-if="projects.length>0 && datos.length>0" :projects="projects" :datos ="datos" />

      </div>
      <!-- End content container -->

      <footerPage />
      <!-- End footer -->
    </div>
    <!-- End body content -->
  </div>
</template>
<script>
import headerPage from "../../components/headerMenu";
import pageOneHeader from "../../components/portfolioOne/portfolioPageHeaderOne";
import pageOneInfo from "../../components/portfolioOne/portfolioInfoOne";
import pageOneGallery from "../../components/portfolioOne/portfolioOneGallery";
import pageOneAction from "../../components/portfolioOne/portfolioOneAction";
import pageOneNext from "../../components/portfolioOne/portfolioOneNext";
import footerPage from "../../components/footer";
import contentful from "../../plugins/contentful";
import _ from "lodash";
export default {
	 asyncData () {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  data() {
    return {
	  projects: [],
	  datos: []
    }
  },
  components: {
    headerPage,
    pageOneHeader,
    pageOneInfo,
    pageOneGallery,
    pageOneAction,
    pageOneNext,
    footerPage
  },
  methods: {

	  async getData() {
		let id = this.$route.params.id;
      let response = await contentful.getEntry(id)
      this.projects = Object.values(response)

	  },
	  getNext() {
      contentful
        .getEntries({ content_type: "projects" })
        .then(v => {
            this.datos= v.items;
        })
        .catch(error => {
          alert(error);
        });

    }
  },
  mounted() {
	  this.getData();
	  this.getNext();
    	window.dispatchEvent(new Event("resize"));
  }
};
</script>
