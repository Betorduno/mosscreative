<template>
<!-- <div> -->
        <section id="portfolio-single-nav">

					<div class="container-fluid"  v-if="idS!=''" >
						<div class="row no-padding">

							<div class="col col-md-12">
								<a :href="'/portfolio'+portfolioModel+'/'+idS" class="ps-nav-next">
									<div class="ps-nav ps-nav-single bg-image" :style="'background-image: url('+image+'); background-position: 50% 54%'">
										<div class="ps-nav-meta">
											<div><h4 class="ps-nav-text">{{title}}</h4></div>
											<div><h2 class="ps-nav-title">{{description}}</h2></div>
										</div>
									</div>
									<div class="ps-nav-arrow"></div>
								</a>
							</div> <!-- /.col -->

						</div> <!-- /.row -->
					</div> <!-- /.container -->

					<!--Begin back to list -->
					<router-link to="/" class="ps-back-to-list">Back To List</router-link>


					<!--End back to list -->

				</section>
    <!-- <pre>{{projects}}</pre></div> -->
</template>
<script>
import contentful from "@/plugins/contentful.js";

export default {
	props:['datos','projects'],
	data(){
		return {
			idS:'',
			image:'',
			title:'',
			description:'',
			portfolioModel:''
		}
	},
	methods: {
		filterID(){
			 let IdSig=(this.projects[1].id)+1;
			this.datos.forEach(element => {

				if(element.fields.id ==IdSig){
					this.idS=element.sys.id;
					this.image =element.fields.mainImage[0].fields.file.url;
					this.title=element.fields.title;
					this.description =element.fields.subtitle;
					this.portfolioModel = element.fields.portfolioModel;

				}

			});
		}
	},
	mounted(){
		this.filterID();
		// console.log('este es: ',this.projects[1].id)
	}
}
</script>
