require ('dotenv'). config ()
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
 env: {
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script:[
      { src: '/assets/vendor/jquery/js/jquery.min.js'}
      ,{ src: '/assets/vendor/jquery/js/jquery-ui.min.js'}
      ,{ src: '/assets/vendor/bootstrap/js/bootstrap.min.js'}
      ,{ src: '/assets/vendor/pace.min.js'}
      ,{ src: '/assets/vendor/jquery.easing.min.js'}
      ,{ src: '/assets/vendor/isotope.pkgd.min.js'}
      ,{ src: '/assets/vendor/imagesloaded.pkgd.min.js'}
      ,{ src: '/assets/vendor/jquery.mousewheel.min.js'}
      ,{ src: '/assets/vendor/owl-carousel/js/owl.carousel.min.js'}
      ,{ src: '/assets/vendor/magnific-popup/js/jquery.magnific-popup.min.js'}
      ,{ src: '/assets/vendor/ytplayer/js/jquery.mb.YTPlayer.min.js'}
      ,{ src: '/assets/js/theme.js'}
],
link: [
    { rel:'stylesheet' ,href:'https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400italic,700,700italic' },
    { rel:'stylesheet' ,href:'https://fonts.googleapis.com/css?family=Roboto&display=swap' },
    { rel:'stylesheet' ,type:'text/css' ,href:'/assets/vendor/bootstrap/css/bootstrap.min.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/jquery/css/jquery-ui.min.css'} ,
    { rel:'stylesheet' ,href:'/assets/vendor/jquery/js/jquery.min.js'} ,
    { rel:'stylesheet' ,href:'/assets/vendor/fontawesome/css/fontawesome-all.min.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/owl-carousel/css/owl.carousel.min.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/owl-carousel/css/owl.theme.default.min.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/magnific-popup/css/magnific-popup.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/ytplayer/css/jquery.mb.YTPlayer.min.css'},
    { rel:'stylesheet' ,href:'/assets/vendor/animate.min.css'},
    { rel:'stylesheet' ,type:'text/css' ,href: '/assets/css/helper.css'},
    { rel:'stylesheet' ,type:'text/css' ,href:'/assets/css/theme.css'},
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
	// extend (config, { isDev, isClient }) {
	// 	if (!isDev) {
	// 	  // relative links, please.
	// 	  config.output.publicPath = './_nuxt/'
	// 	}
	// 	return config;
	//   }
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
	},
	router: {
		base: '/'
	},

  }
}
