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


  <!-- menu -->
  <!-- Menu -->
  <div class="q-py-lg q-gutter-md justify-center text-center">

    <div class="row q-px-md">

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_map" @click="$router.push({ name: 'tours', params: { id: idReservacion } })"/>
          <p class="menu">Attractions</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_local_play"/>
          <p class="menu">What to eat</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_local_florist" />
          <p class="menu">Party</p>  
        </div>
      </div>
        
    </div>

    <div class="row q-px-md">

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_directions_run" />
          <p class="menu">Shopping</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_rowing" />
          <p class="menu">Service</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="o_star" />
          <p class="menu">Transportat </p>  
        </div>
      </div>
      
    </div>

  </div>
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
  /*color:white;*/
  background-color: #fed502;
  height: 60px;
  width: 60px;
  border-radius: 20px;
}
</style>
