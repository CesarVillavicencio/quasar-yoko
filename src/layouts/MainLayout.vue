<template>
  <q-layout view="lHh Lpr lFf">
  <!-- <q-layout view="lHr lpR fff"> -->
    <q-page-container>
      <transition name="router-anim">

        <router-view />       
        

      </transition>
    </q-page-container>
    
    <Menu></Menu>

  </q-layout>
</template>

<!-- <script>
import Menu from 'components/Menu.vue'

export default {
  name: 'MainLayout',
  components: { Menu },
  data () {
    return {
      leftDrawerOpen: false,

      datos:[],
      info:'Esto es info en MainLayout',

    }
  },
  mounted(){

  },

  methods:{

    }

}
</script>
 -->
<script>

import { mapGetters } from "vuex"
import Menu from 'components/Menu.vue'

export default {
components: { Menu },

  data:function(){

    return{
      name: 'MainLayout',
      data:'',
      ruta:this.$route.params.id,
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
  }
}
</script>
