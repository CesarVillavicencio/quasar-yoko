<template>

  <div class="q-pa-md flex flex-center background">
    <div >

      <div class="q-pb-md row flex flex-center">
        <q-input rounded outlined :dense="true">
          <template v-slot:prepend>          
            <q-icon name="search"></q-icon>
          </template>

        </q-input>
         <q-icon name="o_shopping_cart" class="q-ml-md" style="font-size: 25px"></q-icon>
      </div>

      <p v-if="getInformacion.data" class="welcome">Hi, {{getInformacion.data.first_name}} {{getInformacion.data.last_name}}</p>
      <p class="text-weight-bold titulo">Recommendations</p>

       <q-img
        class ="vertical-top rounded-borders radius"
        src="~assets/900x300.png"
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

      <div class="q-pt-md q-gutter-lg justify-center text-center">

        <div class="row">

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

        <div class="row">

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

        <div class="row">

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
  height: 60px;
  width: 60px;
  border-radius: 20px;
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

.radius{
  border-radius: 6px;
}


</style>
