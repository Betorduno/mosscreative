<template>

        <section class="call-to-action">
					<div class="container max-width-1000">
						<div class="row">
							<div class="col-md-12 text-center">
								<h2>{{projects[1].infoTitle}}</h2>

								<p>{{projects[1].infoDescription}}</p>
								<nuxt-link to="/contact" class="btn btn-primary btn-lg margin-top-30">Let's Work Together!</nuxt-link>

							</div> <!-- /.col -->
						</div> <!-- /.row -->
					</div> <!-- /.container -->
				</section>

</template>
<script>
export default {
	props: {
    	projects: {}
	  },
	data(){
		return {}
	}
}
</script>
