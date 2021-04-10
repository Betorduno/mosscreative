<template>
	<div>
		<section id="portfolio-single-info" class="padding-vertical-100">
					<div class="container max-width-1100">
						<div class="row">
							<div class="col-md-8">
								<!-- Begin portfolio single info toggle -->
								<div class="psi-toggle margin-right-20">
									<h1>-<strong>{{projects.aboutProjectDescriptionTitle}}</strong></h1>
									<div class="psi-toggle-inner">
										{{projects.aboutProjectDescription}}
									</div>

								</div>
								<!-- End portfolio single info toggle -->
							</div>
							<!-- /.col -->

							<div class="col-md-4">
								<ul class="list-unstyled margin-bottom-30">
									<li>
										<strong>Cliente:</strong>
										<span class="hide-from-lg"></span>
										{{projects.clienteDescription}}
									</li>
									<li>
										<strong>Proyecto:</strong>
										<span class="hide-from-lg"></span>
										{{projects.categoryDescription}}
									</li>
									<li>
										<strong>Sitio:</strong>
										<span class="hide-from-lg"></span>
										{{projects.laucheProjectUrlDescription}}
									</li>
									<li>
										<br>
										<a
											target="_blank"
											:href="projects.urlProjects"
											class="btn btn-primary btn-lg btn-block"
										>Conoce más</a>
									</li>
								</ul>
							</div>
							<!-- /.col -->
						</div>
						<!-- /.row -->
					</div>
					<!-- /.container -->
				</section>
	</div>
</template>
<script>
export default {
	props:{
			projects:{}
		}
}
</script>
