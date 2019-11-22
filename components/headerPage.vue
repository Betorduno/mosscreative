<template>
    <div>
        <div id="header">

			<!-- Begin logo
			================ -->

			<div id="logo">
				<router-link to="/" ><img :src="logoType" v-if="logoType" title="Home" alt="logo"></router-link>
			</div>
			<!-- End logo -->
			<!-- ==============================
			///// Begin header attriputes /////
			=============================== -->
				<headerPage/>
			<!-- End header attriputes -->

		</div>
		<!-- End header -->
    </div>
</template>
<script>
import headerPage from '../components/headerMenu';
export default {
	props: ['logoType'],
	components:{
		headerPage
	}
}
</script>
