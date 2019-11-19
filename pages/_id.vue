<template>
  <div>
    <!-- Begin global search (simple) 
		==================================
		* Use class "gl-search-dark" to enable global search dark style.
    -->
    <div id="global-search" class="gl-s gls-simple">
      <!-- Begin global search close button -->
      <div class="global-search-close-wrap">
        <a href="" class="global-search-close" title="Close">
          <i class="fas fa-close"></i>
        </a>
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
    <!-- End global search -->

    <!-- ===================
		///// Begin header /////
    ====================-->
    <headerPage/>
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
        <pageOneHeader v-if="projects.length>0" :projects="projects"/>
        <!-- End page header -->
        <!-- ======================================================
				///// Begin split box section (portfolio single info) /////
				based on: http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-responsive-columns-of-same-height
        =======================================================-->
        <pageOneInfo v-if="projects.length>0" :projects="projects"/>
        <!-- End split box section -->
        <!-- ================================================
				///// Begin portfolio single gallery (carousel) /////
        =================================================-->
        <pageOneGallery v-if="projects.length>0" :projects="projects"/>
        <!-- End portfolio single gallery -->
        <!-- ===================================
				///// Begin call to action section /////
        ====================================-->
        <pageOneAction v-if="projects.length>0" :projects="projects" />
        <!-- End call to action section -->
        <!-- =====================================================
				///// Begin portfolio single nav (Next/Prev project) /////
        ======================================================-->
        <pageOneNext v-if="projects.length>0" :projects="projects"/>
	
        <!-- End portfolio single nav -->
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
  </div>
</template>
<script>
import headerPage from "../components/headerMenu";
import pageOneHeader from "../components/portfolioOne/portfolioPageHeaderOne";
import pageOneInfo from "../components/portfolioOne/portfolioInfoOne";
import pageOneGallery from "../components/portfolioOne/portfolioOneGallery";
import pageOneAction from "../components/portfolioOne/portfolioOneAction";
import pageOneNext from "../components/portfolioOne/portfolioOneNext";
import footerPage from "../components/footer";
import contentful from "@/plugins/contentful.js";
import _ from "lodash";
export default {
  data() {
    return {
      projects: []
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
      console.log("este es ",this.projects.length);
	  }
  },
  mounted() {
	  this.getData();
    window.dispatchEvent(new Event("resize"));
  }
};
</script>