<template>
<div> <section id="portfolio-single-info" class="split-box margin-bottom-60">
		<div class="container-fluid">
			<div class="row">
				<div class="row-md-height">
					<!-- Column -->
					<div class="col-md-6 col-md-height col-md-middle no-padding">

						<!-- Begin split box content -->
						<div class="split-box-content">
							<h3>-{{projects[1].aboutProjectDescriptionTitle}}</h3>
							<p>{{projects[1].aboutProjectDescription}}</p>
						</div>
						<!-- End split box content -->

					</div> <!-- /.col -->

					<!-- Column -->
					<div class="col-md-6 col-md-height col-md-middle no-padding" style="background-image: url('assets/img/patterns/swirl-3.png');">
						<!-- Begin split box content -->
						<div class="split-box-content">

							<ul class="list-unstyled" style="color: #f3ebeb">
								<li><strong>Client:</strong> <span class="hide-from-lg">.............</span>{{projects[1].clienteDescription}} </li>
								<li><strong>Category:</strong> <span class="hide-from-lg">............</span> {{projects[1].categoryDescription}}</li>
								<li><strong>Launch Project:</strong> <span class="hide-from-lg">............</span> <a target="_blank" href="http://behance.net/yogurt86"></a>{{projects[1].laucheProjectUrlDescription}}</li>
							</ul>
						</div>
						<!-- End split box content -->
					</div> <!-- /.col -->
				</div> <!-- /.row-height -->
			</div> <!-- /.row -->
		</div> <!-- /.container -->
	</section>
	</div>
   
</template>
<script>
export default {
	props: {
    	projects: {}
	  },mounted(){
		  console.log(this.projects[1].clienteDescription)
	  }
}
</script>