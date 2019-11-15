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
				<menuPage/>
			<!-- End header attriputes -->

		</div>
		<!-- End header -->
    </div>
</template>
<script>
import menuPage from '../components/menuPage';
export default {
	props: ['logoType'],
	components:{
		menuPage
	}
}
</script>