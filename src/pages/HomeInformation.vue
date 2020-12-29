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

      <p class="welcome">Hi, {{getInformacion.data.first_name}} {{getInformacion.data.last_name}}</p>
      <p class="text-weight-bold titulo">Home Information</p>

       <q-img
        class ="vertical-top rounded-borders"
        src=" http://placehold.it/900x300"
        style="width: 100%; height: 100px;"
        contain>
      </q-img>

      <div class="q-pt-md q-gutter-lg justify-center text-center">
        
        <div class="row">
          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="add_business" :to="'/'+ruta+'/homeInformation/Check'" />
              <p class="menu">Check in time</p>  
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="vpn_key" :to="'/'+ruta+'/homeInformation/Gaining access'"/>
              <p class="menu">Gaining Access</p>  
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="wifi" :to="'/'+ruta+'/homeInformation/Wifi'"/>
              <p class="menu">Wifi Access</p>  
            </div>
          </div>
          
        </div>
        <div class="row">
          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="location_on"  :to="'/'+ruta+'/homeInformation/Adress'"/>
              <p class="menu">Adress</p>  
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="emoji_transportation" />
              <p class="menu">Directions</p> 
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="map"/>
              <p class="menu">Transportation</p>  
            </div>
          </div>
          
        </div>

        <div class="row">
          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="local_parking"  to=""/>
              <p class="menu">Parking</p>  
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="o_wb_sunny" to="" />
              <p class="menu">Weather</p>
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="donut_large" />
              <p class="menu">All the corner</p> 
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="single_bed" />
              <p class="menu">Ammenities</p>   
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <q-btn class="buttons"  icon="dashboard"  @click="$router.push({ name: 'houseRules', params: { id: ruta } })"/>
              <p class="menu">Tips</p>
            </div>
          </div>

          <div class="col">
            <div class="negro">
              <!-- <q-btn class="buttons"  icon="list_alt" to="/houseRules"/> -->
              <q-btn class="buttons"  icon="list_alt" :to="'/'+ruta+'/homeInformation/rules'" />
              <p class="menu">House rules</p>  
            </div>
          </div>

        </div>


      </div>

      <!-- <q-toolbar class="q-mt-xl bg-grey-3 shadow-2 rounded-borders">
        <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm" to="/recommendations" />
        <q-space />
        <q-btn flat round dense icon="o_home" class="q-mr-sm active" />
        <q-space />
        <q-btn flat round dense icon="o_store" class="q-mr-sm" />
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
// components: { MainLayout },
  data(){
    return{
      name: 'homeInformation',
      datos:[],
      ruta: this.$route.params.id,
    }    
  },

  mounted(){
    // this.getFromVuex();
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
