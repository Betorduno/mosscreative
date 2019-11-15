<template>
<div>
        	<section id="page-header" data-percent-height="0.9">
					
					<!-- Begin page header image -->
					<div class="page-header-image parallax fade-out-scroll-6 bg-image" :style="'background-image: url(); background-position: 50% 40%;'">

						<!-- Begin page header caption -->
						<div class="page-header-caption">
							<h1 class="page-header-title">{{projects.title}}</h1>
						</div>
						<!-- End page header caption -->

						<!-- Begin scroll down button -->
						<a href="portfolio-single-1.html#portfolio-single-info" class="scroll-down sm-scroll hide-from-sm" title="Scroll down"></a>
						<!-- End scroll down button -->

					</div>
					<!-- End page header image -->

				</section>
				<pre>{{projects.fields.mainImage}}</pre>
  </div> 
</template>
<script>
export default {
	props: ['projects'],
	data(){
		return {
		}
	},mounted(){
		console.log(this.projects)
	}
}
</script>