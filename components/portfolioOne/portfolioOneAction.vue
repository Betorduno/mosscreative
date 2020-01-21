<template>

        <section class="call-to-action">
					<div class="container max-width-1000">
						<div class="row">
							<div class="col-md-12 text-center">
								<h1><strong>{{projects[1].infoTitle}}</strong></h1>

								<p>{{projects[1].infoDescription}}</p>
								<a href="/contact" class="btn btn-primary btn-lg margin-top-30">Contáctanos!</a>

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
