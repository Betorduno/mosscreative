<template>
    <div>
        <!-- ===================================
    ///// Begin portfolio list section /////
    ==================================== -->
	<section id="portfolio-list-section">
					<div class="isotope-wrap">
						<div class="isotope col-3">
							<div class="isotope-items-wrap pli-caption-alter">
								<div class="grid-sizer"></div>

								<div  v-bind:class="'isotope-item '+getHeight(project)" v-for="project in projects" :key="project.fields.id" >

									<!-- Begin portfolio list item -->
									<nuxt-link :to="'portfolio'+project.fields.portfolioModel+'/' + project.sys.id" class="portfolio-list-item bg-image" :style="getStyles(project)">
										<div class="pli-hover">
											<div class="pli-caption">
												<div><h2 class="pli-title">{{project.fields.title}}</h2></div>
												<div><span class="pli-category">{{project.fields.subtitle}}</span></div>
											</div>
											<div class="pli-arrow"></div>
										</div>
									</nuxt-link>
									<!-- End portfolio list item -->

								</div>

							</div>

						</div>

					</div>
				</section>

    <!-- End section -->
    </div>
</template>
<script>
import contentful from '@/plugins/contentful.js';
import _ from 'lodash';
export default {
    data () {
        return {
            projects: []
        }
    },
    methods: {
        filterID (project) {

        },
        initEffect () {

                $container = $('.isotope-items-wrap');
				$container.imagesLoaded(function () {
					$container.isotope({
						itemSelector: '.isotope-item',
						transitionDuration: '0.5s',
						masonry: {
							columnWidth: '.grid-sizer',
							horizontalOrder: false
						}
					});
				});

				// Filter
				$('.isotope-filter-links a').on("click", function () {
                    var selector = $(this).attr('data-filter');
					$container.isotope({
						filter: selector
					});
					return false;
				});

				// Filter item active
				var filterItemActive = $('.isotope-filter-links a');
				filterItemActive.on('click', function () {
					var $this = $(this);
					if (!$this.hasClass('active')) {
						filterItemActive.removeClass('active');
						$this.addClass('active');
					}
				});

        },
        getHeight (project) {
            if (!_.isNil(project.fields.height)) {
                if (project.fields.height == 1) {
                    return "iso-height-1"
                } else {

                    return "iso-height-2"

                }
            }
        },
        getStyles (project) {

           if (!_.isNil(project.fields.mainImage)) {

            return {
                "background-image": "url(" + project.fields.mainImage[0].fields.file.url + ")",
                "background-position": "50% 50%"

            }
           }
		},
		orderID(projects){
			// console.log('projects',projects.map(project => project.fields.id))
			return projects.sort((prev, next) => {
				let pos = 0
				if (prev.fields.id < next.fields.id) {
					pos = -1
				}

				if (prev.fields.id > next.fields.id) {
					pos = 1
				}

				return pos
			})
		},
        getData () {
           	contentful.getEntries({ 'content_type': 'projects' })
			.then((v) => {
				let projects = v.items
				this.initEffect()
				// console.log('before: ', projects.map(project => project.fields.id))
				let projectOrder = this.orderID(projects)

				 console.log('after: ', projectOrder.map(project => project.fields.id))
				this.projects = projectOrder
			})
			.catch(error => {
				alert(error)
			})
		}

    },
    mounted () {
	   	this.getData()
    }
}
</script>
