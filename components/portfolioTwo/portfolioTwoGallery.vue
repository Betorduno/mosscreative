<template>
	<div>
		<section id="portfolio-single-gallery">
			<div class="container-fluid no-padding">
				<div class="isotope-wrap">
					<!-- Begin isotope
							===================
							* Use class "gutter-1", "gutter-2" or "gutter-3" to add more space between items.
							* Use class "col-1", "col-2", "col-3", "col-4", "col-5" or "col-6" for columns.
					-->
					<div class="isotope col-3">
						<!-- Begin isotope items wrap
								==============================
								* Use class "iso-boxed" to enable boxed layout.
						-->
						<div
							class="isotope-items-wrap popup-gallery bg-gray-3 "
						>
							<!-- Grid sizer (do not remove!!!) -->
							<div class="grid-sizer"></div>

							<div
								v-for="project in projects.mainImage"
								:key="project.fields.title"
								:class="'isotope-item ' + getHeight()"
							>
								<!-- Begin portfolio gallery item -->
								<!-- <pre>{{project.fields.file.url }}</pre> -->
								<a
									:href="project.fields.file.url"
									class="ps-gallery-item popup-trigger"
									data-title="Nos reservamos el derecho de publicación y utilización de estos archivos"
								>
									<div
										class="ps-gallery-item-image bg-image"
										:style="
											'background-image: url(' +
												project.fields.file.url +
												'); background-position: 50% 50%'
										"
									></div>
									<div class="ps-gallery-read-more">
										<i class="fas fa-search"></i>
									</div>
								</a>
								<!-- End portfolio gallery item -->
							</div>
							<!-- End isotope item -->
						</div>
						<!-- End isotope items wrap -->
					</div>
					<!-- End isotope -->
				</div>
				<!-- /.isotope-wrap -->
			</div>
			<!-- /.container -->
		</section>
	</div>
</template>
<script>
import _ from 'lodash';
export default {
	props: {
		projects: {}
	},
	methods: {
		getHeight() {
			function getRandomArbitrary() {
				return parseInt(Math.random() * 1 + 1);
			}
			if (getRandomArbitrary() == 1) {
				return 'iso-height-1';
			} else {
				return 'iso-height-2';
			}
		}
	},
	mounted() {
		this.getHeight();

		$('.popup-gallery').each(function() {
			// the containers for all your galleries
			$(this).magnificPopup({
				delegate: '.popup-trigger',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-fadein',
				gallery: {
					enabled: true, // enable or disable gallery (false/true)
					preload: [0, 1], // read about this option in next Lazy-loading section
					navigateByImgClick: true,
					arrowMarkup:
						'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
					tPrev: 'Previous (Left arrow key)', // title for left button
					tNext: 'Next (Right arrow key)', // title for right button
					tCounter:
						'<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
				},
				image: {
					titleSrc: 'data-title', // Attribute of the target element that contains caption for the slide.
					tError:
						'<a href="%url%">The image #%curr%</a> could not be loaded.' // Error message
				}
			});
		});
	}
};
</script>
