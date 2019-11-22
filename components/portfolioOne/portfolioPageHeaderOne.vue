<template>
<div>
        	<section id="page-header" data-percent-height="0.9">
					<!-- Begin page header image -->
					<div class="page-header-image parallax fade-out-scroll-6 bg-image" :style="' background-image: url('+this.projects[1].mainImage[0].fields.file.url+'); background-position: 50% 40%;'">
						<!--background-image: url('+this.projects[1].mainImage[0].fields.file.url+'); -->
						<!-- Begin page header caption -->
						<div class="page-header-caption">
							<h1 class="page-header-title">{{projects[1].title}}</h1>
						</div>
					</div>
					<!-- End page header image -->

				</section>
				<!-- <pre>{{projects.fields.mainImage}}</pre> -->
  </div>
</template>
<script>
export default {
	props: ['projects'],
	data(){
		return {
		}
	},mounted(){
		// console.log('estoy dentro',this.projects[1].mainImage[0].fields.file.url)
	}
}
</script>
