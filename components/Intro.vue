<template>
  <div>
    <section id="intro" class="slideshow bg-dark">
      <div
        class="owl-carousel cursor-grab fade-out-scroll-5"
        data-items="1"
        data-dots="false"
        data-nav="true"
      >
        <div v-if="loading">loading...</div>
        <!-- Begin carousel item
        =========================-->
        <div
          v-else
          v-for="dato in datos"
          :key="dato.fields.title"
          class="cc-item parallax bg-image"
          :style="'background-image: url('+ dato.fields.file.url +'); background-position: 50% 50%;'"
          data-percent-height="1"
        >
          <!-- Begin caption -->
          <div class="cc-caption bottom-left caption-animate">
            <h1 class="page-header-title">{{dato.fields.title}}</h1>
            <div class="intro-sub-title-wrap max-width-400">
              <!-- max width class is optional -->
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
