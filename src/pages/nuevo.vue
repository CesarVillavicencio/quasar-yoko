<template>
<div class="flex flex-center">
<q-page class="flex-center q-px-lg" style="max-width: 370px">
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
    <p class="welcome col-12">Hi, Ana Maria Castrillon Rejon</p> 
    <p class="text-weight-bold titulo">Recommendations</p>
  </div>
  <!--  -->

  <!-- Publicidad -->
  <q-img
    class ="publicidad"
    src="~assets/900x300.png">
  </q-img>
  <!--  -->

  <!-- top5 -->
  <q-img
    class ="publicidad q-mt-xs"
    src="~assets/bar.jpg"
    >
    <div class="absolute-bottom bg">
      <p class="imgTitle">Top 5 best pubs in Guadalajara </p>
      <p class="imgSubtitle">Lorem ipsum amet lorem</p>
    </div>
  </q-img>
  <!--  -->

  <!-- Menu -->
  <div class="q-py-lg q-gutter-md justify-center text-center">

    <div class="row q-px-md">

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="location_on" :to="'/'+ruta+'/attractions'" />
          <p class="menu">Atractions</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="restaurant_menu"/>
          <p class="menu">What to eat</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="local_bar" />
          <p class="menu">Party </p>  
        </div>
      </div>
        
    </div>

    <div class="row q-px-md">

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="shopping_bag" />
          <p class="menu">Shopping</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="add_box" />
          <p class="menu">Services</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="local_taxi" />
          <p class="menu">Transport </p>  
        </div>
      </div>
      
    </div>

    <div class="row q-px-md">

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="map"/>
          <p class="menu">Transport</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="dashboard" />
          <p class="menu">Specialized <br> store</p>  
        </div>
      </div>

      <div class="col">
        <div class="negro">
          <q-btn class="buttons"  icon="notifications_active"/>
          <p class="menu">Emergency </p>  
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

.topFive{
  border-radius: 6px;
}

/**/
.imgTitle{
  margin-bottom: 0;
  font-weight: bold;
  font-size: 14px;
}
.imgSubtitle{
  margin-bottom: 0;
  font-size: 10px;
}
/**/

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

.bg{
  background:none !important;
}
</style>
