<template>
  <div>
    <!-- <section id="intro" class="slideshow bg-dark">
      <div
        class="owl-carousel cursor-grab fade-out-scroll-5"
        data-items="1"
        data-dots="false"
        data-nav="true"
      >
        <div v-if="loading">loading...</div>

        <div

          v-for="dato in datos"
          :key="dato.fields.title"
          class="cc-item parallax bg-image"
          :style="'background-image: url('+ dato.fields.file.url +'); background-position: 50% 50%;'"
          data-percent-height="1"
        >

          <div class="cc-caption bottom-left caption-animate">
            <h1 class="page-header-title">{{dato.fields.title}}</h1>
            <div class="intro-sub-title-wrap max-width-400">

              <h2 class="page-header-sub-title">{{dato.fields.description}}</h2>
            </div>
          </div>
        </div>
      </div>
    </section> -->
	<section id="intro" class="slideshow bg-dark">
		<div class="owl-carousel cursor-grab fade-out-scroll-5 nav-bottom-right" data-items="1" data-dots="false" data-nav="true" >

			<div v-for="(dato, index) in datos" :key="index" class="cc-item parallax bg-image" :style="'background-image: url('+dato.fields.file.url+'); background-position: 50% 50%;'" data-percent-height="1">

				<div class="cc-caption intro-caption bottom-left caption-animate">
					<h1 class="intro-title">{{dato.fields.title}}</h1>
					<div class="intro-sub-title-wrap max-width-400">
						<h2 class="page-header-sub-title">{{dato.fields.description}}</h2>
					</div>
				</div>
			</div>
		</div>
	</section>

  </div>
</template>
<script>

import contentful from "@/plugins/contentful.js";
export default {
  data() {
    return {
      loading: true,
      datos: []
    };
  },

  mounted() {
    this.getData();
    setTimeout(() => {

      this.loading = false;
      this.$nextTick(() => {
        window.dispatchEvent(new Event("resize"));
        $(this.$el)
          .find(".owl-carousel")
          .owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: false,
			responsiveClass: true,
			autoHeight: true,
			navText: ['', ''],
            responsive: {
              0: {
                items: 1,
                nav: true,
                autoplayTimeout: 8000
              },
              600: {
                items: 1,
                nav: false,
                autoplayTimeout: 8000
              },
              1000: {
                items: 1,
                nav: true,
                loop: true,
                autoplayTimeout: 8000
              }
            }
          });
      });
	}, 500);


// $('.owl-carousel').each(function(){
// 	window.dispatchEvent(new Event("resize"));
//       var $carousel = $(this);
//       $carousel.owlCarousel({

//          items: $carousel.data("items"),
        //  loop: $carousel.data("loop"),
        //  margin: $carousel.data("margin"),
        //  center: $carousel.data("center"),
        //  startPosition: $carousel.data("start-position"),
        //  animateIn: $carousel.data("animate-in"),
        //  animateOut: $carousel.data("animate-out"),
        //  autoWidth: $carousel.data("autowidth"),
        //  autoHeight: $carousel.data("autoheight"),
        //  autoplay: $carousel.data("autoplay"),
        //  autoplayTimeout: $carousel.data("autoplay-timeout"),
        //  autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
        //  autoplaySpeed: $carousel.data("autoplay-speed"),
        //  nav: $carousel.data("nav"),
        //  navText: ['', ''],
        //  navSpeed: $carousel.data("nav-speed"),
        //  dots: $carousel.data("dots"),
        //  dotsSpeed: $carousel.data("dots-speed"),
        //  mouseDrag: $carousel.data("mouse-drag"),
        //  touchDrag: $carousel.data("touch-drag"),
        //  dragEndSpeed: $carousel.data("drag-end-speed"),
        //  lazyLoad: $carousel.data("lazy-load"),
        //  video: true,
//          responsive: {
//             0: {
//             //    items: $carousel.data("mobile-portrait"),
//             //    center: false,
//             },
//             480: {
//             //    items: $carousel.data("mobile-landscape"),
//             //    center: false,
//             },
//             768: {
//             //    items: $carousel.data("tablet-portrait"),
//             //    center: false,
//             },
//             992: {
//             //    items: $carousel.data("tablet-landscape"),
//             },
//             1200: {
//             //    items: $carousel.data("items"),
//             }
//          }

//       });


//    });

    let owl = $(".owl-carousel");
    owl.on("changed.owl.carousel", this.changeSlider);
  },
  methods: {
    getData() {
      contentful
        .getEntries({ content_type: "sliders" })
        .then(v => {

        v.items.forEach(element => {
            this.datos= element.fields.imageMain;

          });
        })
        .catch(error => {
          alert(error);
        });

    },
    changeSlider(event) {
      let change = event.item.index;
      let result = false;
      if (change % 2 == 0) {
        // console.log(change);
        result = true;
      }

      this.$emit("changeSlider", result);
    }
  }
};
</script>
