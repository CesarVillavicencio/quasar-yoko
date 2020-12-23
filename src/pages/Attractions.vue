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

      <p class="welcome" @click="$router.back()"> 
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
        Home Information
      </p>
      <p class="text-weight-bold titulo">Attractions</p>

       <q-img
        class ="vertical-top rounded-borders"
        src=" http://placehold.it/900x300"
        
        contain>
      </q-img>

      <div class="q-pt-xl q-gutter-lg row justify-center text-center pruebaHeight">

        <div class="negro">
          <q-btn class="buttons"  icon="o_map" @click="$router.push({ name: 'tours', params: { id: ruta } })"/>
          <p class="menu">Atractions</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="o_local_play" />
          <p class="menu">What to eat</p>  
        </div>
        
        <div class="negro">
          <q-btn class="buttons"  icon="o_local_florist" />
          <p class="menu">Party</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="o_directions_run" />
          <p class="menu">Shopping</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="o_rowing" />
          <p class="menu">Services</p>  
        </div>

        <div class="negro">
          <q-btn class="buttons"  icon="o_star" />
          <p class="menu">Transport</p>  
        </div>

      </div>


<!--       <div class="fixed-bottom sixe " >
        <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize">

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

export default {
  data(){
    return{
      name: 'Attractions',
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

/*toolbar*/
.sixe{
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
}
.centersize{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

</style>
