<template>

  <div class="q-pa-md flex flex-center background">
    <div class="q-gutter-sm" style="max-width: 300px">
      <!-- <span class="material-icons">
      date_range
      </span>
      <q-input rounded outlined v-model="text" label="All you need in yoko" /> -->
      <div class="q-pb-md row flex flex-center">
        <q-input rounded outlined :dense="true">
          <template v-slot:prepend>          
            <q-icon name="search"></q-icon>
          </template>

        </q-input>
         <q-icon name="o_shopping_cart" class="q-ml-md" style="font-size: 25px"></q-icon>
      </div>

      <p class="welcome">Hi, Ana Maria Castrillón Rejón</p>
      <p class="text-weight-bold titulo">Recommendations</p>

       <q-img
        class ="vertical-top rounded-borders"
        src=" http://placehold.it/900x300"
        style="width: 100%; height: 100px;"
        contain>
      </q-img>

      <q-img
        class ="vertical-top rounded-borders"
        src="~assets/bar.jpg"
        style="width: 100%; height: 100px;"
        contain>
        <div class="absolute-bottom">
          <p class="imgTitle">Top 5 best pubs in Guadalajara </p>
          <p class="imgSubtitle">Lorem ipsum amet lorem</p>
        </div>
      </q-img>

      <div class="q-pt-md q-gutter-lg row justify-center text-center">

        <div class="negro">
          <q-btn class="buttons"  icon="location_on" @click="$router.push({ name: 'attractions', params: { id: ruta } })" />

          <p class="menu">Atractions</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="restaurant_menu" />
          <p class="menu">What to eat</p>  
        </div>
        
        <div class="negro">
          <q-btn class="buttons"  icon="local_bar"/>
          <p class="menu">Party</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="shopping_bag" />
          <p class="menu">Shopping</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="add_box" />
          <p class="menu">Services</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="local_taxi" />
          <p class="menu">Transport</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="map" />
          <p class="menu">Transport</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="dashboard" />
          <p class="menu">Specialized <br> store</p>
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="notifications_active" />
          <p class="menu">Emergency</p>  
        </div>
        <p>
        </p>
        <!-- <q-btn class="buttons"  icon="shopping_bag" v-for="n in 6" :key="'xs-${n}'" /> -->
      </div>

     <!--  <q-toolbar class="q-mt-xl bg-grey-3 shadow-2 rounded-borders">
        <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm active" to="/recommendations" />
        <q-space />
        <q-btn flat round dense icon="o_home" class="q-mr-sm"  to="/homeInformation"/>
        <q-space />
        <q-btn flat round dense icon="o_store" class="q-mr-sm" to="/"/>
        <q-space />
        <q-btn flat round dense icon="o_local_activity" class="q-mr-sm" />
        <q-space />
        <q-btn flat round dense icon="o_legend_toggle" class="q-mr-sm" to="/details"/>        
      </q-toolbar> -->


    </div>
  </div>

  
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data(){
    return{
      name: 'Recommendations',
      datos:[],
      ruta: this.$route.params.id,
    }    
  },

  mounted(){

  },

  computed: {
    ...mapGetters('datos', [
            'getInformacion',
        ]),
  },

  methods:{
    
  }

}
</script>
<style>
.negro{
  padding-left: 5px;
  padding-right: 5px;
}

.menu{
  font-size: 10px;
  padding-top: 8px;
  text-align: center;
}
.welcome{
  color: #a9a9a9;
  font-size: 10px;
  margin-bottom: 0 !important;
}
.background{
  background-color: #fbfbfb;
}

.buttons{
  /*color:white;*/
  background-color: #fed502;
  height: 50px;
  border-radius: 18px;
}

.titulo{
  margin-top: 0 !important;
  font-size: 20px;
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

.active{
  background-color: #fed502;
  color:white;
  border-radius: 25% !important;
}

</style>
