<template>
<!-- <div> -->
        <section id="portfolio-single-nav">
					
					<div class="container-fluid">
						<div class="row no-padding">

							<div class="col col-md-12">
								<a href="#" class="ps-nav-next">
									<div class="ps-nav ps-nav-single bg-image" style="background-image: url('assets/img/porfolio/portfolio-1.jpg'); background-position: 50% 54%">
										<div class="ps-nav-meta">
											<div><h4 class="ps-nav-text">Next Project</h4></div>
											<div><h2 class="ps-nav-title">Sushi Bar</h2></div>
										</div>
									</div>
									<div class="ps-nav-arrow"></div>
								</a>
							</div> <!-- /.col -->

						</div> <!-- /.row -->
					</div> <!-- /.container -->

					<!--Begin back to list -->
					<router-link to="/" class="ps-back-to-list">Back To List</router-link> 
						
					
					<!--End back to list -->

				</section>
    <!-- <pre>{{projects}}</pre></div> -->
</template>
<script>
import contentful from "@/plugins/contentful.js";

export default {
	 data() {
    return {
      projects: []
    }
  },
	methods: {

	  async getData() {
     
	  
      let response = await contentful.getEntries({'content-type':'projects'})
      this.projects = Object.values(response)
      console.log("este es ",this.projects);
	  }
  },
  mounted() {
	  this.getData();
  }

}
</script>