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
            <div  v-for="project in projects[1].mainImage"  :key="project.fields.title" class="owl-item active" style="width: 455.333px;">
              <a
                :href="project.fields.file.url"
                class="cc-item ps-gallery-item padding-height-75 popup-trigger bg-image"
                :style="'background-image: url('+ project.fields.file.url +'); background-position: 50% 50%;'"
                data-title="by: yogurt86"
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
      
     
      nav: true,
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
  }
};
</script>