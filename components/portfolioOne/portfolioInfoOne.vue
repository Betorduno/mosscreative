<template>
	<div>
		<section id="portfolio-single-info" class="split-box margin-bottom-60">
			<div class="container-fluid">
				<div class="row">
					<div class="row-md-height">
						<!-- Column -->
						<div class="col-md-6 col-md-height col-md-middle no-padding">
							<!-- Begin split box content -->
							<div class="split-box-content">
								<h3>
									-{{
										projects.aboutProjectDescriptionTitle
									}}
								</h3>
								<p>{{ projects.aboutProjectDescription }}</p>
							</div>
							<!-- End split box content -->
						</div>
						<!-- /.col -->

						<!-- Column -->
						<div
							class="col-md-6 col-md-height col-md-middle no-padding"
							style="background-image: url('../assets/img/patterns/swirl-3.png');"
						>
							<!-- Begin split box content -->
							<div class="split-box-content">
								<ul
									class="list-unstyled"
									style="color: #f3ebeb"
								>
									<li>
										<strong>Cliente:</strong>
										<span class="hide-from-lg"
											></span
										>{{ projects.clienteDescription }}
									</li>
									<li>
										<strong>Proyecto:</strong>
										<span class="hide-from-lg"
											></span
										>
										{{ projects.categoryDescription }}
									</li>
									<li>
										<strong>Sitio:</strong>
										<span class="hide-from-lg"
											></span
										>
										<nuxt-link
											target="_blank"
											to=""
										></nuxt-link
										>{{
											projects.laucheProjectUrlDescription
										}}
									</li>
								</ul>
							</div>
							<!-- End split box content -->
						</div>
						<!-- /.col -->
					</div>
					<!-- /.row-height -->
				</div>
				<!-- /.row -->
			</div>
			<!-- /.container -->
		</section>
	</div>
</template>
<script>
export default {
	props: {
		projects: {}
	}
};
</script>
