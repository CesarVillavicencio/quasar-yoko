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

<script>
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
