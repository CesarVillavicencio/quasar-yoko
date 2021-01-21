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

        <p class="text-weight-bold titulo col-12">Meals</p>
      </div>

        <a :href="banner[0].target_link" target="_blank">
          <q-img v-if="banner[0]"
          class ="vertical-top rounded-borders"
          :src="banner[0].image"
          :to="banner[0].target_link"
          
          contain>
          </q-img>
        </a>      

      <div class="row q-pt-md">
        <div class="col-6 q-mr-xs" >
          <q-select outlined v-model="model" :options="categorias" label="Category" dense/>
        </div>

        <div class="col-5 q-ml-xs">
          <q-select outlined v-model="modelo" :options="options" label="Provider" dense/>
        </div>
      </div>
      
      <div v-for="c in productos.data">
        <router-link :to="'/'+ruta+'/meals/'+c.id+''" >

          <q-img class="q-mb-md q-mt-md vertical-top rounded-borders" 
          src="~assets/imgPrueba.jpg"  
          >
          <div class="absolute-bottom">
            <p class="imgTitle" >{{c.name}}</p>
            <p class="imgSubtitle">{{c.schedule}}</p>
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
      model: '',
      modelo:'',
      categorias:[],
      productos:[],
      banner:"",

      options: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail'
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth'
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          icon: 'map'
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course'
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          icon: 'casino'
        }
      ],
      ruta: this.$route.params.id,
    }
  },

  mounted () {
    this.getCategorias(), this.getProductos(), this.getBannerXid();
  },

  beforeDestroy () {
  },

  methods: {
    getCategorias(){
      this.$axios.get('https://panel.yokoportal.com/api/v1/categories')
      .then((response) => {
        this.categorias = response.data.data
        // console.log(this.categorias);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Usando notificaciones',
            icon: 'report_problem'
          })
        })
      
    },

    getProductos(){
      this.$axios.get('https://panel.yokoportal.com/api/v1/products')
      .then((response) => {
        this.productos = response.data
        // console.log(this.categorias);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Usando notificaciones',
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
            message: 'Usando notificaciones',
            icon: 'report_problem'
          })
        })
    }
  }
}
</script>

<style>
.welcome{
  color: #a9a9a9;
  font-size: 10px;
  margin-bottom: 0 !important;
}
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
