<template>
<div>
        <section id="portfolio-single-gallery">
				
					<h2 class="ps-gallery-heading">Gallery</h2>
					
					<div  class="owl-carousel popup-gallery nav-outside-top dots-right dots-rounded" data-items="3" data-nav="true" data-dots="false" data-tablet-landscape="3" data-tablet-portrait="3" data-mobile-landscape="2" data-mobile-portrait="1">
					<div>	
						<!-- Begin carousel item -->
						<router-link v-for="project in projects[1].mainImage" :to ="project.fields.file.url"  :key="project.fields.title" class="cc-item ps-gallery-item padding-height-75 popup-trigger bg-image" :style="'background-image: url('+ project.fields.file.url +'); background-position: 50% 50%;'" data-title="by: yogurt86">
							
							<div class="ps-gallery-read-more"><i class="fas fa-search"></i></div>
						</router-link>
					</div>
						<!-- End carousel item -->


					</div>
					<!-- End content carousel -->

				</section>
			<!-- <div v-for="project in projects[1].mainImage"><pre>-----{{project.fields}}------</pre></div> -->
 </div>
</template>
<script>
export default {
	props: {
    	projects: {}
	  }
}
</script>