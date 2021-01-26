<template>
<div class="flex flex-center">
<q-page class="flex-center q-px-lg" style="width: 370px">
  <!-- buscador -->
<!--   <div class="row flex-center q-pt-md">
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
  <!--  -->

  <!-- mensajes de bienvenida -->
  <div class="row q-pt-lg">
    <p class="welcome col-12">Hi, {{getInformacion.data.first_name}} {{getInformacion.data.last_name}}</p> 
    <p class="text-weight-bold titulo col-12">Home Information</p>
  </div>
  <!--  -->

  <!-- Publicidad -->
  <q-img v-if="bannerData"
    class ="publicidad"
    :src="bannerData[0].image">
  </q-img>
  <!--  -->


  <!-- Menu -->
  <div class="q-py-lg q-gutter-sd justify-center text-center">

    <div class="row q-px-lg">

      <div class="col-4" v-if="getInformacion.data.property.check_in_details">
        <div class="negro">
          <q-btn class="buttons"  icon="add_business" :to="'/'+idReserva+'/homeInformation/Check'" />
          <p class="menu">Check In/Out</p>  
        </div>
      </div>

      <div class="col-4" v-if="getInformacion.data.property.access_details">
        <div class="negro">
          <q-btn class="buttons"  icon="vpn_key" :to="'/'+idReserva+'/homeInformation/Gaining Access'"/>
          <p class="menu">Gaining Acess</p>  
        </div>
      </div>

      <div class="col-4" v-if="getInformacion.data.property.wifi_details">
        <div class="negro">
          <q-btn class="buttons"  icon="wifi" :to="'/'+idReserva+'/homeInformation/Wifi Access'"/>
          <p class="menu">Wifi Access</p>  
        </div>
      </div>
        
    <!-- </div>

    <div class="row q-px-md"> -->

      <div class="col-4" v-if="getInformacion.data.property.address">
        <div class="negro">
          <q-btn class="buttons"  icon="location_on" :to="'/'+idReserva+'/homeInformation/Address'"/>
          <p class="menu">Address</p>  
        </div>
      </div>

      <!-- <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="emoji_transportation" />
          <p class="menu">Directions</p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="map" />
          <p class="menu">Transportation </p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="local_parking"/>
          <p class="menu">Parking</p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="o_wb_sunny" />
          <p class="menu">Weather</p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="donut_large"/>
          <p class="menu">At the corner </p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="single_bed"/>
          <p class="menu">Ammenities</p>  
        </div>
      </div>

      <div class="col-4">
        <div class="negro">
          <q-btn class="buttons"  icon="dashboard" />
          <p class="menu">Tips</p>  
        </div>
      </div> -->

      <div class="col-4" v-if="getInformacion.data.property.rules">
        <div class="negro">
          <q-btn class="buttons"  icon="list_alt"  :to="'/'+idReserva+'/homeInformation/Rules'"/>
          <p class="menu">House rules</p>  
        </div>
      </div>
      
    </div>

  </div>
  <!--  -->

</q-page>
</div>
  
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
      idReserva: this.$route.params.id,
      bannerData:''
    }    
  },

  mounted(){
    this.getFromVuex(), this.getBanner();
  },

  computed: {
    ...mapGetters('datos', [
            'getInformacion',
            'getProrudctos'
        ]),
    
  },

  methods:{
    getFromVuex(){
      this.$q.loading.show()
      this.$store.dispatch('datos/getDatos', this.idReserva);
      this.$store.getters['datos/getInformacion'];
      this.$store.getters['datos/getProrudctos'];
      this.datos = this.getInformacion;
      console.log(this.datos);
      this.$q.loading.hide()
    },

    getBanner(){
      this.$axios.get('https://panel.yokoportal.com/api/v1/banners')
      .then((response) => {
        this.bannerData = response.data.data
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
    }

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
.ft{
  width: 100% !important
}

.welcome{
  /*color: #a9a9a9;*/
  margin-bottom: 0 !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
}

.titulo{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

}

.publicidad{
  width: 100%;
  /*height: 93px;*/
  border-radius: 6px;
}

.negro{
  padding-left: 5px;
  padding-right: 5px;
}

.menu{
  font-size: 12px;
  padding-top: 8px;
  text-align: center;
}
.buttons{
  background-color: #fed502;
  height: 60px;
  width: 60px;
  border-radius: 20px;
}
</style>
