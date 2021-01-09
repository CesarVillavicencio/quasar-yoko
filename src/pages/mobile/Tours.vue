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
    
    <q-btn flat color="danger"  @click="$router.back()" no-caps>
      <p class="txtBack col-12" >
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Recommendations
      </p>
    </q-btn>
    <p class="col-12 titulo">Attractions</p>
  </div>


  <!-- Publicidad -->
  <!-- <q-img
    class ="publicidad"
    src="~assets/900x300.png">
  </q-img> -->
  <!--  -->

  <!-- Menu -->
  <div class="q-py-lg q-gutter-md justify-center text-center">
      <div class="row q-pt-md justify-between">
        <div class="col-6" >
          <q-select outlined v-model="category" :options="options" label="Category" dense/>
        </div>
        
        <div class="col-5">
          <q-select outlined v-model="order" :options="options" label="Order" dense/>
        </div>
      </div>      

  </div>

  <router-link :to="'/'+idReservacion+'/tours/id'" v-for="k in 10">

    <q-img class="q-mb-xs q-mt-md vertical-top publicidad" 
      src="~assets/imgPrueba.jpg"  
      >
      <div class="absolute-bottom">
        <p class="imgTitle" >Dream House <q-icon  class="text-yellow" v-for="n in 5" name="star"/></p>
        <p class="imgSubtitle">Lorem ipsum amet text</p>
      </div>
    </q-img>

  </router-link>
  <!--  -->
  
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

</style>
