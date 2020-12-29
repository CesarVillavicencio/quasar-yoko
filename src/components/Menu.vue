<template>
  <div class="fixed-bottom sixe " >
    <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize" :class="{ 'hidden': !showNavbar }">

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
  </div>
</template>

<script>
const OFFSET = 30
export default {
  name: 'pageTours',
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      OFFSET:30,
      fondo:false,

      buttons:{one:false, two:false, three:false, four:false, five:false},

      ruta: this.$route.params.id,

    }
  },

  mounted () {
    this.getRoute()
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll (){
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },

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