<template>
<div>
		<section id="portfolio-single-nav">
					<div class="container-fluid">
						<div class="row no-padding">
							<div class="col col-md-6">
								<a :href="'/portfolio'+pModelAnt+'/'+idAnt" class="ps-nav-prev"  v-if="idAnt!= null">
									<div
										class="ps-nav bg-image"
										:style="'background-image: url('+imgAnt+'); background-position: 50% 40%'"
									>
										<div class="ps-nav-meta">
											<div>
												<h1 style="background-color: #fff; color: #000"><strong>Proyecto</strong></h1>
											</div>
											<br>
											<div>
												<h2 class="ps-nav-title">{{tituloAnt}}</h2>
											</div>
										</div>
									</div>
									<div class="ps-nav-arrow"></div>
								</a>
							</div>
							<!-- /.col -->

							<div class="col col-md-6">
								<a :href="'/portfolio'+pModel+'/'+id" class="ps-nav-next" v-if="id!= null">
									<div
										class="ps-nav bg-image"
										:style="'background-image: url('+img+'); background-position: 50% 50%'"
										>
										<div class="ps-nav-meta">
											<div>
												<h1 style="background-color: #fff; color: #000"><strong>Proyecto</strong></h1>
											</div>
											<br>
											<div>
												<h2 class="ps-nav-title">{{titulo}}</h2>
											</div>
										</div>
									</div>
									<div class="ps-nav-arrow"></div>
								</a>
							</div>
							<!-- /.col -->
						</div>
						<!-- /.row -->
					</div>
					<!-- /.container -->

					<!--Begin back to list -->
					<nuxt-link to="/" class="ps-back-to-list">Página Principal</nuxt-link>
					<!--End back to list -->
				</section>
	</div>
<!-- <div> -->
        <!-- <section id="portfolio-single-nav">
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
							</div>
						</div>
					</div>
					<router-link to="/" class="ps-back-to-list">Pagina Principal</router-link>
				</section> -->
    <!-- <pre>{{projects}}</pre></div> -->
</template>
<script>
export default {

	props:['projects', 'datos'],
	data(){
		return {
			id:null,
			img:null,
			titulo:null,
			pModel:null,
			idAnt:null,
			imgAnt:null,
			tituloAnt:null,
			pModelAnt:null
		}
	},
	methods: {
		filterID(){
			 const IdSig=(this.projects[1].id)+1;
			 const IdAnt =(this.projects[1].id)-1;
			this.datos.forEach(element => {

				if( element.fields.id==IdSig){

					this.id=element.sys.id;
					this.img =element.fields.mainImage[0].fields.file.url;
					this.titulo=element.fields.title;
					this.pModel = element.fields.portfolioModel;
				}
				if(element.fields.id ==IdAnt){

					this.idAnt=element.sys.id;
					this.imgAnt =element.fields.mainImage[0].fields.file.url;
					this.tituloAnt=element.fields.title;
					this.pModelAnt = element.fields.portfolioModel;
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
