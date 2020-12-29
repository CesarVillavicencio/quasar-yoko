<template>
<q-page class="flex-center black">
  <div class="q-pa-md flex flex-center" v-if="getInformacion.data">
    <div style="max-width: 300px">
      <div class="q-pb-md row flex flex-center">
        <div class="row" style="padding-top:7em;">
          <q-avatar size="175px">
            <img class="imgPrincipal" :src="getInformacion.data.property.cover">
          </q-avatar>  
        </div>
      </div>

      <div class="row flex flex-center">
        <h6 class="nombre">Hi, {{getInformacion.data.first_name}} {{getInformacion.data.last_name}}</h6>
      </div>

      <div class="row flex flex-center q-pb-xs">
        <p class="welcomeIndex">Welcome to </p><br>
        <p class="welcomeIndex"> {{getInformacion.data.property.name}}</p>
      </div>

      <div class="row flex flex-center">
        <q-btn
          class="fecha flex flex-center"
          text-color="black"
          icon="date_range"
          unelevated
          no-caps
          @click="$router.push({ name: 'homeInformation', params: { id: ruta } })"
          >         
           {{transformFecha(getInformacion.data.check_in_date)}} -  {{transformFecha(getInformacion.data.check_out_date)}}
        </q-btn>
      </div>

      <div class="flex flex-center absolute-bottom">
        <img
        class ="yokologo"
        alt="yoko logo"
        src="~assets/yoko_logo.png"
       >
    </div>
      

    </div>
  </div>
</q-page>
  
</template>

<script>
import { mapGetters } from "vuex"
import moment from 'moment'
import {Loading, QSpinnerGears} from 'quasar'

export default {
  data(){
    return{
      name: 'App',
      datos:[],
      ruta: this.$route.params.id,
    }    
  },

  mounted(){
    this.getFromVuex();
  },

  computed: {
    ...mapGetters('datos', [
            'getInformacion',
        ]),
    
  },

  methods:{
    getFromVuex(){
      this.$q.loading.show()
      this.$store.dispatch('datos/getDatos', this.ruta);
      this.$store.getters['datos/getInformacion'];
      this.datos = this.getInformacion;
      console.log(this.datos);
      this.$q.loading.hide()
    },

    transformFecha(date){
      return moment(String(date)).format('DD/MMM')
    },

    // showLoading () {
    //   this.$q.loading.show()

    //   // hiding in 5s
    //   this.timer = setTimeout(() => {
    //     this.$q.loading.hide()
    //     this.timer = void 0
    //   }, 5000)
    // }


  }

}
</script>

<style>
.black{
  background-color: black;
}

.imgPrincipal{
  border: 1.5px solid;
  color:#fed502;
  padding: 5px;
}

.nombre{
  color:white;
  margin-bottom:15px;
  margin-top: 15px;
}
.welcomeIndex{
  color: white;
  font-size: 1.5em; 
  padding: 0 50px 0 50px;
  margin-bottom: 0 !important;
  font-weight: 200;
}

.fecha{
  border-radius: 10px; background-color: #fed502; height: 2.5em;
}

.yokologo{
  max-width: 150px;
}
</style>
