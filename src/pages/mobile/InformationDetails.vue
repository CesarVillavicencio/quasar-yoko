<template>
<div class="flex flex-center">
<q-page class="flex-center q-px-lg" style="width: 370px">
  <!-- buscador -->
  <div class="row flex-center q-pt-md">
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

  </div>
  <!--  -->

  <!-- mensajes de bienvenida -->
  <div class="row q-pt-lg">
    
    <p class="txtBack col-12">
     
      <q-btn flat color="danger"  @click="$router.back()" no-caps>
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Home Information
      </q-btn>
    </p>
    <p class="text-weight-bold titulo">{{ruta}}</p>
  </div>


  <!-- Publicidad -->
  <!-- <q-img
    class ="publicidad"
    src="~assets/900x300.png">
  </q-img> -->
  <!--  -->


  <!-- contenido -->
  <div class="row q-pt-lg " v-if="getInformacion.data">

    <p v-if="this.ruta =='Wifi'" v-html="getInformacion.data.property.wifi_details"></p>

    <p v-if="this.ruta =='Check'" v-html="getInformacion.data.property.check_in_details"></p>

    <p v-if="this.ruta =='Address'" v-html="getInformacion.data.property.address"></p>

    <p v-if="this.ruta =='Gaining'" v-html="getInformacion.data.property.access_details"> </p>

    <p v-if="this.ruta =='Rules'" v-html="getInformacion.data.property.rules"></p>
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
      ruta: this.$route.params.title,
      idReservacion: this.$route.params.id,
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
      this.$store.dispatch('datos/getDatos', this.idReservacion);
      this.$store.getters['datos/getInformacion'];
      this.datos = this.getInformacion;
      console.log(this.datos);
      this.$q.loading.hide()
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
.ft{
  width: 100% !important
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
</style>
