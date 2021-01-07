<template >
<!--   <div class="fixed-bottom sixe">
    <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize" :class="{ 'hidden': ocultar }">

      <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm button" :to="'/'+ruta+'/recommendations'" :class="{'active':buttons.one}" @click="activar('one')"/>
      <q-space />

      <q-btn flat round dense icon="o_home" class="q-mr-sm" :to="'/'+ruta+'/homeinformation'" :class="{'active':buttons.two}" @click="activar('two')"/>
      <q-space />

      <q-btn flat round dense icon="o_store" class="q-mr-sm" :class="{'active':buttons.three}" @click="activar('three')" />
      <q-space />

      <q-btn flat round dense icon="o_local_activity" class="q-mr-sm" :class="{'active':buttons.four}" @click="activar('four')"/>
      <q-space />

      <q-btn flat round dense icon="o_legend_toggle" class="q-mr-sm" :to="'/'+ruta+'/details'"/>

    </q-toolbar>

    <q-scroll-observer @scroll="onScrollTwo"/>
  </div>  -->

  <q-footer class="sixe reveal" :class="{ 'hidden': ocultar }">
    <q-toolbar class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize" >
      <!-- <q-toolbar-title></q-toolbar-title> -->
        <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm button" :to="'/'+ruta+'/recommendations'" :class="{'active':buttons.one}" @click="activar('one')"/>
        <q-space />

        <q-btn flat round dense icon="o_home" class="q-mr-sm" :to="'/'+ruta+'/homeinformation'" :class="{'active':buttons.two}" @click="activar('two')"/>
        <q-space />

        <q-btn flat round dense icon="o_store" class="q-mr-sm" :class="{'active':buttons.three}" @click="activar('three')" />
        <q-space />

        <q-btn flat round dense icon="o_local_activity" class="q-mr-sm" :class="{'active':buttons.four}" @click="activar('four')"/>
        <q-space />

        <q-btn flat round dense icon="o_legend_toggle" class="q-mr-sm" :to="'/'+ruta+'/details'"/>

         <q-scroll-observer @scroll="onScrollTwo"/>
    </q-toolbar>
  </q-footer>

</template>

<script>
const OFFSET = 30
export default {
  name: 'pageTours',
  data () {
    return {

      buttons:{one:false, two:false, three:false, four:false, five:false},

      ruta: this.$route.params.id,

      ocultar:false,

    }
  },
  computed:{
    check(){
    
    }
  },

  mounted () {
    this.getRoute()
   
  },

  methods: {
    
    activar(number){

      this.buttons = {one:false, two:false, three:false, four:false, five:false}

      if (number == "one") {
        this.buttons.one = true
      }

      else if (number == "two") {
        this.buttons.two = true
      }

      else if (number == "three") {
        this.buttons.three = true
      }

      else if (number == "four") {
        this.buttons.four = true
      }      
      
    },

    getRoute(){
      if (this.$route.name == "recommendations") {this.buttons.one = true}
      else if (this.$route.name == "homeInformation") {this.buttons.two = true}
      this.ocultar = false
    },

     onScrollTwo (info) {
      if (info.direction == 'down') {this.ocultar=true}
      else{
        this.ocultar=false
      }
    }
  }
}
</script>

<style>
  /*toolbar*/

.sixe{
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
  /**/
  background-color: transparent !important;
  color:black;
}

.centersize{
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.active{
  background-color: #fed502;
  color:white;
  border-radius: 25% !important;
}

.button{

}

.button:active{
  background-color: #fed502;
  color:white;
  border-radius: 25% !important;
}

q-btn.router-link-active {
  background-color: #fed502;
  color: #f66;
}

</style>