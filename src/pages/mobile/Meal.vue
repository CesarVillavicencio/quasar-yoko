<template>
<q-page class="flex-center back">

  <div class="q-pa-md flex flex-center background">
    <div style="width: 300px" v-if="producto.data">
      <!-- buscador -->
   <!--    <div class="row flex-center q-pt-md">
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
      <!-- Buscador -->

      <q-btn flat color="danger"  @click="$router.back()" no-caps>
        <p class="txtBack col-12" >
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Back
        </p>
      </q-btn>

      <p class="flex flex-center titulo">{{producto.data[0].name}}</p>

      <q-carousel v-if ="producto.data[0].gallery != 0"
        animated
        v-model="slide"
        arrows
        navigation
        infinite>

        <q-carousel-slide v-for="(foto, index, key) in producto.data[0].gallery" :name="key+1" :img-src="foto.original_url"/>

      </q-carousel>

      <div class="texto q-pt-md">
        <p> 
        {{producto.data[0].description}}
        </p>
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

      <div class="flex flex-center q-pt-xl">
        <q-btn type="a" class="button" color="black" label="Reserva"  :href="producto.data[0].venue.website" target="_blank"/>
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
      producto:[],
      idProducto: this.$route.params.idMeal,
      slide:1,

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
    this.getCurrentPosition(), this.getproducto();

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
    },

    getproducto(){
      // this.$axios.get('http://127.0.0.1:8000/api/v1/product/'+this.idProducto)
      this.$axios.get('https://panel.yokoportal.com/api/v1/product/'+this.idProducto)
      .then((response) => {
        this.producto = response.data
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
