<template >
<!-- <q-page class="flex-center black" v-bind:style='{ backgroundImage: "url(" + cover + ")", }'> -->
<q-page class="flex-center black" v-bind:style= '[cover != "" ? {backgroundImage: "url(" + cover + ")"} : {}]'>

 <div class="q-pa-md flex flex-center">
    <div>
        <div class="row" style="padding-top:7em;">
          <div class="col-2">
            <q-avatar size="70px" >
              <img class="imgPrincipal float-left" :src="getInformacion.data.property.host.photo">
            </q-avatar> 
          </div>
          <div class="col-10 q-pl-lg q-pt-xs" >
              <p class="textoWhite yhis">Your host is</p> 
              <p class="textoWhite hostName col-12">{{getInformacion.data.property.host.first_name}} {{getInformacion.data.property.host.last_name}}</p>  
          </div>
          
        </div>

        <div class="row q-pt-lg q-pl-md">
          <p class="textoWhite guestName col-12">Hi, {{getInformacion.data.first_name}} {{getInformacion.data.last_name}}</p>
          <p class="textoWhite welcome">Welcome to {{getInformacion.data.property.name}}</p>  
          
        </div>

        <div class="row q-pt-lg q-pl-md">
          <q-btn
            class="fecha flex flex-center"
            text-color="black"
            unelevated
            no-caps
            @click="$router.push({ name: 'homeInformation', params: { id: ruta } })">

            <q-icon class="q-pr-xs" name="date_range" color="black" style="font-size: 24px; "></q-icon>

            {{transformFecha(getInformacion.data.check_in_date)}} -  {{transformFecha(getInformacion.data.check_out_date)}}
          </q-btn>
        </div>

        <div class="flex flex-center absolute-bottom">
          <img
          class ="yokologo"
          alt="yoko logo"
          src="~assets/logoBlanco.png"
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
      name: 'Index',
      datos:[],
      cover:"",
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
      this.$store.dispatch('datos/getDatos', this.ruta).then(() => {
        this.cover = this.$store.state.datos.informacion.data.property.cover;
      });

      this.$store.getters['datos/getInformacion'];

      this.$q.loading.hide()
    },

    transformFecha(date){
      return moment(String(date)).format('DD/MMM')
    },

    showLoading () {
      this.$q.loading.show()

      // hiding in 5s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 5000)
    }


  }

}
</script>

<style>
.black{
  /*background-color: black;*/
  background-image:url(~assets/fondo.png);
  background-repeat: no-repeat;
  background-size: cover;

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
  /*padding: 0 50px 0 50px;*/
  margin-bottom: 0 !important;
  font-weight: 200;
}

.fecha{
  border-radius: 10px; background-color: #fed502; height: 2.5em;
}

.yokologo{
  max-width: 150px;
}

/*nuevas*/
.textoWhite{
  margin-bottom: 0px !important;
  color:white;
}

.yhis{
  font-size: 14px;
  font-weight: 300;
}

.hostName{
  /*font-size: 3vw;*/
  font-size: 20px;
  font-weight: bold;
}

.guestName{
  font-size:20px;
  font-weight: bold;
}

.welcome{
  font-size: 20px;
  font-weight: 300;
}

</style>
