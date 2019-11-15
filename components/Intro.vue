<template>
   <div>
    <section id="intro" class="slideshow bg-dark">
    <div class="owl-carousel cursor-grab fade-out-scroll-5 " data-items="1" data-dots="false" data-nav="true">
           <div v-if="loading">loading...</div>
						<!-- Begin carousel item 
						========================= -->
						<div v-else v-for="slider in sliders" :key="slider.id" class="cc-item parallax bg-image"  :style="'background-image: url(assets/img/intro/'+ slider.image +'); background-position: 50% 50%;'" data-percent-height="1">
							<!-- Begin caption -->
							<div class="cc-caption bottom-left caption-animate">
								<h1 class="page-header-title">title</h1>
								<div class="intro-sub-title-wrap max-width-400">
									<!-- max width class is optional -->
									<h2 class="page-header-sub-title">
									subtitle
									</h2>
								</div>
						  </div>
						</div>
            </div>
	    </section>	
    </div>
</template>
<script>
import data from '../static/assets/js/data.json';
export default {
    data() {
      return {
        loading: true,
        sliders: []
      }
    },

    mounted() {
  
       setTimeout(() => {
        this.sliders = data;
        this.loading = false;
        this.$nextTick(() => {
          window.dispatchEvent(new Event('resize'));
          $(this.$el).find('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true,
                autoplayTimeout: 5000
              },
              600: {
                items: 1,
                nav: false,
                autoplayTimeout: 5000
              },
              1000: {
                items: 1,
                nav: true,
                loop: false,
                autoplayTimeout: 5000
              }
            }
          });
        });
      }, 500);

      let owl = $('.owl-carousel');
        owl.on('changed.owl.carousel', this.changeSlider)
    },
    methods: {
        changeSlider(event) {
         
            let change = (event.item.index);
            let result = false
            if(change%2==0){
             // console.log(change);
              result = true
            }

            this.$emit('changeSlider', result);
          
        }      
    }
}
</script>