<template>
  <div id="q-app"> 

	    <router-view />
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
export default {
  data:function(){
    return{
      name: 'App',
      data:'',
      ruta:this.$route.params.id,
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
	/*@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";*/

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
