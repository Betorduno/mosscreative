<template>
	<div>
		<section id="page-header" data-percent-height="0.9">
					<div
						class="page-header-image parallax fade-out-scroll-5 bg-image"
						:style="'background-image: url('+projects.mainImage[0].fields.file.url+'); background-position: 50% 30%;'"
					>
						<div class="page-header-caption">
							<h1 class="page-header-title">
								{{projects.title}}
							</h1>
						</div>
					</div>
				</section>
	</div>
</template>
<script>
export default {
	props: ['projects'],
	data(){
		return {
		}
	},
	mounted() {
		console.log('hola mundo');
		console.log("******",this.headerData)
	}
}
</script>
