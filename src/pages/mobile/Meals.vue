<template>
<div class="flex flex-center">
<q-page class="flex-center q-px-lg" style="width: 370px">

  <div class="background">
    <div style="max-width: 370px">
      <!-- buscador -->
      <!-- <div class="row flex-center q-pt-md">
        <div class="col-10">
          <q-input class="ft" rounded outlined :dense="true">
            <template v-slot:prepend>          
              <q-icon name="search"></q-icon>
            </template>

          </q-input>        
        </div>

        <div class="col-2">
          <q-icon name="o_shopping_cart" class="q-ml-md" style="font-size: 25px"></q-icon>
        </div>

      </div> -->
      <!-- buscador -->

      <div class="row q-pt-lg">
        <q-btn flat color="danger"  @click="$router.back()" no-caps>
          <p class="txtBack col-12" >
            <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
            Recommendations
          </p>
        </q-btn>

        <p class="text-weight-bold titulo col-12" v-if="this.categoria">{{this.categoria[0].name}}</p>
      </div>

        <a :href="banner[0].target_link" target="_blank" v-if="this.banner[0]">
          <q-img
          class ="vertical-top rounded-borders"
          :src="banner[0].image"
          :to="banner[0].target_link"
          
          contain>
          </q-img>
        </a>      

      <div class="row q-pt-md">
        <div class="col-6 q-mr-xs" >
          <q-select outlined v-model="subcategoriaSelecta" :options="subcategorias" option-label="name" label="Subcategory " clearable 
          @input="getProductos()" dense/>
        </div>

        <div class="col-5 q-ml-xs">
          <q-select outlined v-model="venueSelecto" :options="venues" option-label="name" label="Venue " clearable 
           @input="getProductos()" dense/>
        </div>
      </div>
      
      <div v-for="c in productos.data">
        <router-link :to="'/'+ruta+'/meals/'+c.id+''" >

          <q-img class="q-mb-md q-mt-md vertical-top rounded-borders" 
          src="~assets/imgPrueba.jpg"  
          >
          <div class="absolute-bottom">
            <p class="imgTitle" >{{c.name}}</p>
            <!-- <p class="imgSubtitle">{{c.schedule}}</p> -->
            <p class="imgSubtitle">{{c.description}}</p>
          </div>
        </q-img>

        </router-link>
      </div>

    </div>      

  </div>

</q-page>
</div>

  
</template>

<script>
const OFFSET = 60
export default {
  name: 'Meals',
  data () {
    return {
      subcategoriaSelecta: '',
      venueSelecto:'',
      categoria:'',
      subcategorias:[],
      productos:[],
      banner:"",
      venues:[],

      options: [
        {
          label: 'Venue1',
          value: '1',
          description: 'Search engine',
          icon: 'mail'
        },
        {
          label: 'Venue2',
          value: '2',
          description: 'Social media',
          icon: 'bluetooth'
        }
      ],

      ruta: this.$route.params.id,
      idCategoria: this.$route.params.idCategoria,
    }
  },

  mounted () {
    this.getCategorias(), this.getProductos(), this.getBannerXid(); this.getVenues();
  },

  computed: {
    // options () {
    //   return Object.freeze(options.slice(0, pageSize * (this.nextPage - 1)))
    },
  // beforeDestroy () {
  // },

  methods: {
    getCategorias(){
      this.$axios.get('https://panel.yokoportal.com/api/v1/category/'+this.idCategoria)
      .then((response) => {
        this.categoria = response.data.data
        this.subcategorias = this.categoria[0].subcategories

        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Categories Error',
            icon: 'report_problem'
          })
        })
      
    },

    getProductos(){
      if (this.subcategoriaSelecta == null) {this.subcategoriaSelecta=""}
      var idCat = this.subcategoriaSelecta.id;
      if (this.venueSelecto == null) {this.venueSelecto=""}
      var idVenue = this.venueSelecto.id;
      // this.$axios.get('https://panel.yokoportal.com/api/v1/productos', {params:{idCategoria:idCat}})
      this.$axios.get('https://panel.yokoportal.com/api/v1/productos/'+this.idCategoria, {params:{idSubCategoria:idCat , venue_id:idVenue}})
      .then((response) => {
        this.productos = response.data
        // console.log(this.categorias);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'problema en productos',
            icon: 'report_problem'
          })
        })
    },

    getBannerXid(){
      var idCategoria = this.$route.params.idCategoria;
      this.$axios.get('https://panel.yokoportal.com/api/v1/banners/'+idCategoria)
      .then((response) => {
        this.banner = response.data.data
        // console.log(this.categorias);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Banner Error',
            icon: 'report_problem'
          })
        })
    },

    getVenues(){
      this.$axios.get('http://localhost/Yoko/public/api/v1/venues')
      .then((response) => {
        this.venues = response.data.data
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Venues Error',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>

<style>
.background{
  background-color: #fbfbfb;
}

.titulo{
  margin-top: 0 !important;
  font-size: 20px;
}

.imgTitle{
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14px;
}
.imgSubtitle{
  margin-bottom: 0;
  font-size: 10px;
}

.q-input-target{
  height: 10px !important;
}

.q-img__content > div {
  background: none !important;
} 
/*toolbar*/

.sixe{
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
}

.centersize{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

</style>
