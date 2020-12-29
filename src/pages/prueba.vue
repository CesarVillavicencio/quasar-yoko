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

      <p class="welcome" @click="$router.back()"> 
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
      {{text}}
      </p>
      <p class="text-weight-bold titulo">{{ruta}}</p>

       <q-img
        class ="vertical-top rounded-borders"
        src="~assets/900x300.png"
        
        contain>
      </q-img>
      <!-- <q-img v-if="datos"
        class ="vertical-top rounded-borders"
        :src="datos.cover"        
        contain>
      </q-img>
      -->
      <div class="row q-pt-lg">
        <q-icon name="smoke_free" class="q-pr-md" style="font-size: 25px"></q-icon>
        <q-icon name="child_care" style="font-size: 25px"></q-icon>
      </div>

      <div class="row q-pt-lg " v-if="getInformacion.data">
        {{getInformacion.data.first_name}}
        {{getInformacion.data.last_name}}
        {{getInformacion.data.property.address}}
        <br>
        <p>
        {{datos.data}}
        </p>
      </div>


<!--       <div class="fixed-bottom sixe " >
        <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize">

          <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm" to="/" />
          <q-space />
          <q-btn flat round dense icon="o_home" class="q-mr-sm active" to="/homeinformation" />
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
      name: 'App',
      text: 'Home Information y vuex',
      datos:[],
      otrosDatos:[],
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
      this.$store.dispatch('datos/getDatos', this.ruta);
      this.$store.getters['datos/getInformacion'];
      this.datos = this.getInformacion;
      console.log(this.datos);
      // alert("comiendo");
      // console.log(getInformacion.data.property);
    }
  }

}
</script>

<style>
.back{
  background-color: #fbfbfb;
}
.welcome{
  /*color: #a9a9a9;*/
  font-weight: bold;
  color: black;
  font-size: 12px;
  margin-bottom: 0 !important;
}

.titulo{
  margin-top: 0 !important;
  font-size: 20px;
}

.texto{
  font-size: 12px;
}

.arrow{
  color: #fed502;
  font-size: 22px !important;
  font-weight: bold;
}

.active{
  background-color: #fed502;
  color:white;
  border-radius: 25% !important;
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
