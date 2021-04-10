<template>
  <div>
    <section id="portfolio-single-gallery">
      <h2 class="ps-gallery-heading">Gallery</h2>
      <div
        class="owl-carousel popup-gallery nav-outside-top owl-loaded owl-drag" >
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="transform: translate3d(0px, 0px, 0px); transition: all 0.25s ease 0s; width: 1822px;"
          >
            <div  v-for="project in projects.mainImage"  :key="project.fields.title" class="owl-item active" style="width: 455.333px;">
              <a
                :href="project.fields.file.url"
                class="cc-item ps-gallery-item padding-height-75 popup-trigger bg-image"
                :style="'background-image: url('+ project.fields.file.url +'); background-position: 50% 50%;'"
                data-title="Nos reservamos el derecho de publicación y utilización de estos archivos"
              >
                <div class="ps-gallery-read-more">
                  <i class="fas fa-search"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="disabled"></div>
      </div>
      <!-- End content carousel -->
    </section>
  </div>

  <!-- <div v-for="project in projects[1].mainImage"><pre>-----{{project.fields}}------</pre></div> -->
</template>
<script>
export default {
  props: {
    projects: {}
  },
  mounted() {
    $(".owl-carousel").owlCarousel({
	  items:3,
	  nav: true,
	  navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
	});

$('.popup-gallery').each(function() { // the containers for all your galleries
      $(this).magnificPopup({
         delegate: '.popup-trigger',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-fadein',
         gallery: {
            enabled: true, // enable or disable gallery (false/true)
            preload: [0,1], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
         },
         image: {
            titleSrc: 'data-title', // Attribute of the target element that contains caption for the slide.
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' // Error message
         }
      });
   });

  }
};

</script>
