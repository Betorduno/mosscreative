<template>
<div>
<nav id="menu" class="menu slide-right-half bg-image" style=" background-position: 50% 50%">

				<!-- Element cover -->
				<div class="cover bg-transparent-5-dark"></div>

				<!-- Begin menu inner -->
				<div id="menu-inner">

					<!-- Begin menu content -->
					<div id="menu-content">

						<!-- Begin menu nav -->
						<div class="menu-nav">
							<ul class="menu-list">
								<li class="has-children active">
									<nuxt-link  to="/" class="sub-menu-trigger">Home</nuxt-link>
								</li>
								<li class="has-children">
									<nuxt-link to="/somoos" class="sub-menu-trigger">SoMoos</nuxt-link>
								</li>
								<li class="has-children">
									<nuxt-link to="/contact" class="sub-menu-trigger">Contacto</nuxt-link>
								</li>

							</ul>
						</div>
						<!-- End menu nav -->

					</div>
					<!-- End menu inner -->

					<!-- Begin menu footer -->
					<div class="menu-footer">
						<div class="row">
							<div class="col-sm-6">

								<!-- Begin social buttons -->
								<div class="social-buttons">
									<ul>
										<li><a href="https://www.instagram.com/moss.creativo/" class="btn btn-primary btn-link" target="_blank" title="Follow us on instagram"><i class="fab fa-instagram"></i></a></li>
										<li><a href="https://www.behance.net/pipe-toro" class="btn btn-primary btn-link" target="_blank" title="Follow us on instagram"><i class="fab fa-behance"></i></a></li>

									</ul>
								</div>
								<!-- End social buttons -->

							</div> <!-- /.col -->

							 <!-- /.col -->
						</div> <!-- /.row -->
					</div>
					<!-- End menu footer -->

				</div>
				<!-- End menu content -->

			</nav>
			<div id="header-attriputes">
				<ul>
					<li>
						<!-- Begin menu trigger -->
						<div id="menu-trigger">
							<div class="mt-inner">
								<div class="menu-str">
									<span class="str-1"></span>
									<span class="str-2"></span>
									<span class="str-3"></span>
								</div>
							</div>
							<div class="mt-text">Menu</div>
						</div>
						<!-- End menu trigger -->
					</li>

					<li>
						<!-- Begin global search trigger -->

						<!-- End global search trigger -->
					</li>
				</ul>
			</div>

    </div>


</template>
<script>
export default {
	methods: {
		triggerMenu () {
			let body = $('body')
			if (body.hasClass('menu-open')) {
				body.removeClass('menu-open')
			} else {
				body.addClass('menu-open')
			}
		},
		checkMenu () {
			let body = $('body')
			if (body.hasClass('menu-open')) {
				body.removeClass('menu-open')
			}
		}
	},
	mounted(){
		$('.mt-inner').click(this.triggerMenu)
		this.checkMenu()
	}
}
</script>

