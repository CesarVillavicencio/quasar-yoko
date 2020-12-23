<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition name="router-anim">
        <router-view />
      </transition>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainIndex',
  components: {  },
  data () {
    return {
      leftDrawerOpen: false,

      datos:[],
      info:'Esto es info en indexLayout',

    }
  },
  mounted(){

  },

  methods:{

    }

}
</script>
