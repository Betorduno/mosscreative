<template>
<div>    
<nav id="menu" class="menu slide-right-half bg-image" style="background-image: url('assets/img/misc/menu-bg-1.jpg'); background-position: 50% 50%">

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
									<a href="/" class="sub-menu-trigger">Home</a>
								</li>
								<li class="has-children">
									<a href="/somoos" class="sub-menu-trigger">SoMoos</a> 
								</li>
								<li class="has-children">
									<a href="/contact" class="sub-menu-trigger">Contacto</a> 
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
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on facebook"><i class="fab fa-facebook-f"></i></a></li>
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on twitter"><i class="fab fa-twitter"></i></a></li>
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on dribbble"><i class="fab fa-dribbble"></i></a></li>
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on behance"><i class="fab fa-behance"></i></a></li>
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on linkedin"><i class="fab fa-linkedin-in"></i></a></li>
										<li><a href="/" class="btn btn-primary btn-link" target="_blank" title="Follow us on youtube"><i class="fab fa-youtube"></i></a></li>
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
		}
	},
	mounted(){
		$('.mt-inner').click(this.triggerMenu)

	}
}
</script>

