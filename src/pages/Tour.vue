<template>
<q-page class="flex-center back">

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

      <!-- <p class="welcome" @click="$router.back()"> 
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Back
      </p> -->

      <q-btn flat color="danger"  @click="$router.back()" no-caps>
        <p class="txtBack col-12" >
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Back
        </p>
      </q-btn>

      <p class="flex flex-center titulo">Dream House</p>
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite>

        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
      </q-carousel>

      <div class="texto q-pt-md">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, ex eget tempus venenatis, libero enim tempor odio, consectetur rutrum ipsum dolor eget purus. Mauris malesuada, lectus non pretium rhoncus, consectetur adipiscing elit. Nulla accumsan, ex eget tempus venenatis, libero enim tempor odio, consectetur rutrum ipsum dolor eget purus. </p>
      </div>

      <div class="q-pt-md">
        <p style="font-weight:bold;">Location</p>
      </div>

      <div id="mapa">
        <gmap-map
          :center="center"
          :zoom="zoom"
          style="width: 100%; height: 150px;">

          <gmap-marker v-for="(marker) in markers"
          :key="marker.key"
          :position="marker"
          >

          </gmap-marker>
        </gmap-map>
      </div>

      <div class="flex flex-center q-pt-md">
        <q-btn class="button" color="black" label="Reserva" @click="reserva()"/>
        <!-- <q-btn class="button" color="black" label="Reservacion" />   -->
      </div>
      
      <!-- <div>
        GPS position: <strong>{{ position }} - {{center.lat}} , {{center.lng}}</strong>
      </div>    -->   

    </div>
  </div>
</q-page>
  
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
// importar herramientas para usar gps  
import { Plugins } from '@capacitor/core'
const { Geolocation } = Plugins

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA_xZFqyiXzANyZHrBfdsZGDzxsfgAMK50'
  }
})

export default {
  data () {
    return {
      slide: 1,
      position:'determinando...',
      lat:'',
      lng:'',
      center: {
        lat: '',
        lng:''
      },
      zoom: 12,

      markers: [
        { lat: 24.1072584, lng: -110.3189778 },
        { lat: 25.1072584, lng: -110.9189778 },
      ],
    }
  },

  mounted(){
    this.getCurrentPosition()

    // we start listening
    this.geoId = Geolocation.watchPosition({}, (position, err) => {
      console.log('New GPS position')
      this.position = position
    })
  },

   beforeDestroy () {
    // we do cleanup
    Geolocation.clearWatch(this.geoId)
  },

  methods:{
    getCurrentPosition() {
      Geolocation.getCurrentPosition().then(position => {
        console.log(position);
        this.position = position
        // alert(this.position);
        this.center.lat = position.coords.latitude;
        this.center.lng = position.coords.longitude;
        // console.log(position);
      });
    },

    reserva(){
      this.$q.notify({
        color: 'black',
        position: 'top',
        message: 'Reserva en construccion',
        icon: 'schedule'
      })
    }
  },
}

</script>

<style>
.imgTitle{
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14px;
}
.imgSubtitle{
  margin-bottom: 0;
  font-size: 10px;
}

.button{
  margin-left: 5px;
  margin-right: 5px;
}

.q-carousel{
  height: 300px !important;
}

.titulo{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

}

.txtBack{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
}

</style>
