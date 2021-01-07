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
      Home Information
      </p>
      <p class="text-weight-bold titulo">{{ruta}}</p>

       <q-img
        class ="vertical-top rounded-borders"
        src="~assets/900x300.png"
        
        contain>
      </q-img>

      <div class="row q-pt-lg">
        <q-icon name="smoke_free" class="q-pr-md" style="font-size: 25px"></q-icon>
        <q-icon name="child_care" style="font-size: 25px"></q-icon>
      </div>

      <div class="row q-pt-lg " v-if="getInformacion.data">

        <p v-if="this.ruta =='Wifi'" v-html="getInformacion.data.property.wifi_details"></p>

        <p v-if="this.ruta =='Check'" v-html="getInformacion.data.property.check_in_details"></p>

        <p v-if="this.ruta =='Adress'">{{getInformacion.data.property.address}}</p>

        <p v-if="this.ruta =='Gaining access'" v-html="getInformacion.data.property.access_details"> </p>

        <p v-if="this.ruta =='rules'" v-html="getInformacion.data.property.rules"></p>
      </div>

    </div>
  </div>
</q-page>
  
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data:function(){
    return{
      name: 'App',
      text: 'esto es texto',
      number:1,
      datos:[],
      ruta: this.$route.params.title,
      wifi:'',
    }    
  },

  mounted(){
    // this.loadData();
  },

  computed: {
    ...mapGetters('datos', [
            'getInformacion',
        ]),
    
  },

  methods:{
    loadData () {      
      this.$axios.get('https://y.codigorex.com/api/v1/property')
      .then((response) => {
        this.datos = response.data
        console.log(this.datos);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Usando notificaciones',
            icon: 'report_problem'
          })
        })
      },

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
