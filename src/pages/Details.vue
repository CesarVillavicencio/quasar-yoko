<template>
<q-page class="flex-center background">

  <div class="q-pa-md flex flex-center background">
    <div style="max-width: 300px">
      <div class="q-pb-md row flex flex-center">
        <q-input rounded outlined :dense="true">
          <template v-slot:prepend>          
            <q-icon name="search"></q-icon>
          </template>

        </q-input>
          <q-icon name="o_shopping_cart" class="q-ml-md" style="font-size: 25px"></q-icon>
      </div>

      <div class="row">
        <div class="col-12">
          <p class="float-right"  @click="$router.back()">X</p>
        </div>
      </div>
      <p class="text-weight-bold titulo">Hi, Ana María Castrillón Rejón</p>

      <div class="row">
      <div class="col-4">
        <q-avatar size="95px">
          <!-- <img class="imgPrincipal" src="https://i.imgur.com/7AkgQPF.jpg"> -->
          <img :src="getInformacion.data.property.cover">
        </q-avatar>
      </div>

      <div class="col-7 flex flex-center text-left">
        <!-- Texto -->
        <!-- <p class="texto">Welcome to <br>Casa Guadalajara</p> -->
        <p class="texto">Welcome to <br> {{getInformacion.data.property.name}}</p>
        
        <!-- Boton -->
        <div class="flex flex-center">
           <q-btn
              class="fecha"
              text-color="black"
              icon="date_range"
              unelevated
              to=""
              no-caps
              @click="show()">
             {{transformFecha(getInformacion.data.check_in_date)}} -  {{transformFecha(getInformacion.data.check_out_date)}}
          </q-btn>
        </div>
      </div>
        
        
      </div>

      <div class="row q-pt-xl">
        <div class="col-2">
          <q-icon name="o_person" class="q-ml-md" style="font-size: 20px; color:#fed502;"></q-icon>
        </div>

        <div class="col-10">
          <p class="title">Your host is</p>
          <p class="text-weight-bold">{{getInformacion.data.property.host.first_name}} {{getInformacion.data.property.host.last_name}}</p>
          <!-- <p class="text-weight-bold">Nombre de Host</p> -->
          <p class="float-left">
            <!-- <q-icon name="o_facebook" class="q-mr-md" style="font-size: 25px"></q-icon>
            <q-icon name="o_phone" href="tel:2125551212" class="q-ml-md q-mr-md" style="font-size: 25px"></q-icon>
            <q-icon name="o_mail" class="q-ml-md q-mr-md" style="font-size: 25px"></q-icon> -->
            <q-btn flat type="a" href="facebook.com" icon="o_facebook"/>
            <q-btn flat type="a" href="tel:54911-1234-5678" icon="o_phone"/>
            <q-btn flat type="a" :href="`mailto:${getInformacion.data.property.host.email}`" icon="o_mail"/>
          </p>
        </div>
      </div>
      <q-separator inset />

      <div class="row q-pt-md">
        <div class="col-2">
          <q-icon name="o_location_on" class="q-ml-md" style="font-size: 20px; color:#fed502;"></q-icon>
        </div>

        <div class="col-8">
          <p class="title">Adress</p>
          <!-- <p class="text-weight-bold">Av. Siempreviva No. 123-A <br>col. nuncavives</p> -->
          <div class="text-weight-bold" v-html="getInformacion.data.property.address"></div>
          
        </div>

          <div class="col-2">
            
            <!-- <q-icon name="o_location_on" href="/" style="font-size: 40px; color:#fed502;"></q-icon> -->
            <a href="http://www.google.com/maps/place/49.46800006494457,17.11514008755796">
              <q-img style="max-width: 60%;"
                class =""
                alt="googleMaps"
                src="~assets/google-maps.png"
                
               />
             </a>
          </div>
        </div>
      <q-separator inset />

      <div class="row q-pt-md">
        <div class="col-2">
          <q-icon name="o_wifi" class="q-ml-md" style="font-size: 20px; color:#fed502;"></q-icon>
        </div>

        <div class="col-10">
          <p class="title">Wi-Fi</p>
<!--           <p class="text-weight-bold">Casa GDL</p>
          <p class="title">Password</p>
          <p class="float-left text-weight-bold">AKSIEJSU-78SAD-89</p> -->
          <div v-html="getInformacion.data.property.wifi_details"></div>
        </div>
      </div>
      <q-separator inset />

      <div class="row q-pt-md">
        <div class="col-2">
          <q-icon name="error_outline" class="q-ml-md" style="font-size: 20px; color:#fed502;"></q-icon>
        </div>

        <div class="col-8">
          <p class="title">Emergency number</p>
          <p class="text-weight-bold">911</p>
        </div>

        <div class="col-2">
          <!-- <q-icon name="o_phone" class="q-ml-md q-mr-md" style="font-size: 25px"></q-icon> -->
          <q-btn flat type="a" href="tel:54911-1234-5678" icon="o_phone"/>
        </div>
      </div>
      <q-separator inset />

      <div class="row q-pt-md">
        <div class="col-2">
           <!-- <q-btn flat type="a" href="http://www.google.com/maps/place/49.46800006494457,17.11514008755796" icon="share" style="color:#fed502;" /> -->
          <q-icon name="share" class="q-ml-md" style="font-size: 20px; color:#fed502;"></q-icon>
        </div>

        <div class="col-7">
          <p class="title">Share your location</p>
          <!-- <p class="text-weight-bold">911</p> -->
        </div>
        <div class="col-3">
          <img
            class ="yoko"
            alt="yoko logo"
            src="~assets/logoNegro.png"
            
           >
        </div>


      </div>

      <!-- <div class="col fixed-bottom sixe">

        <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders">
          <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm" to="/" />
          <q-space />
          <q-btn flat round dense icon="o_home" class="q-mr-sm" to="/homeinformation" />
          <q-space />
          <q-btn flat round dense icon="o_store" class="q-mr-sm" />
          <q-space />
          <q-btn flat round dense icon="o_local_activity" class="q-mr-sm" />
          <q-space />
          <q-btn flat round dense icon="o_legend_toggle" class="q-mr-sm" />

        </q-toolbar>
      </div> -->


    </div>
  </div>
</q-page>  
</template>

<script>
import { mapGetters } from "vuex"
import moment from 'moment'

export default {
  data(){
    return{
      name: 'Details',
      text: 'Home Information y vuex',
      datos:[],
      ruta: this.$route.params.id,
      telefono:'6121402318',
      correo:'cesar@komvac.com',
      imageSrc: ''
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
      this.$store.dispatch('datos/getDatos', this.ruta);
      // this.$store.getters['datos/getInformacion'];
      // this.datos = this.getInformacion;
    },

    transformFecha(date){
      return moment(String(date)).format('DD/MMM')
    }
  }

}
</script>
<style>
.fecha{
border-radius: 10px; background-color: #fed502; height: 2.5em;
}

.texto{
  font-size: 18px;
}

.yoko{
  max-width: 90%;
}

.title{
  margin-bottom: 0 !important;
}
</style>
