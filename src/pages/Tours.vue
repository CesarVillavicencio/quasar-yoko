<template>
<q-page class="flex-center background">

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

      <p class="welcome" @click="$router.go(-1)"> 
        <q-icon name="chevron_left" style="font-size: 25px; color:#fed502;"></q-icon>
         Attractions
      </p>
      <p class="text-weight-bold titulo">Tours</p>

      <q-img
        class ="vertical-top rounded-borders"
        src=" http://placehold.it/900x300"
        
        contain>
      </q-img>

      <div class="row q-pt-md">
        <div class="col-6 q-mr-xs" >
          <q-select outlined v-model="model" :options="options" label="Rate" dense/>
        </div>

        <div class="col-5 q-ml-xs">
          <q-select outlined v-model="model" :options="options" label="Rate" dense/>
        </div>
      </div>
 
      <router-link :to="'/'+ruta+'/tours/id'" v-for="k in 5">

        <q-img class="q-mb-md q-mt-md vertical-top rounded-borders" 
        src="~assets/imgPrueba.jpg"  
        >
        <div class="absolute-bottom">
          <p class="imgTitle" >Dream House <q-icon  class="text-yellow" v-for="n in 5" name="star"/></p>
          <p class="imgSubtitle">Lorem ipsum amet text</p>
        </div>
      </q-img>

      </router-link>

    </div>      

  </div>

</q-page>
  
</template>

<script>
const OFFSET = 60
export default {
  name: 'pageTours',
  data () {
    return {
      scrollInfo: {},
      posicion:{},
      direccion: {},
      model: null,
      options: [
        {
          label: 'Google',
          value: 'Google',
          description: 'Search engine',
          icon: 'mail'
        },
        {
          label: 'Facebook',
          value: 'Facebook',
          description: 'Social media',
          icon: 'bluetooth'
        },
        {
          label: 'Twitter',
          value: 'Twitter',
          description: 'Quick updates',
          icon: 'map'
        },
        {
          label: 'Apple',
          value: 'Apple',
          description: 'iStuff',
          icon: 'golf_course'
        },
        {
          label: 'Oracle',
          value: 'Oracle',
          disable: true,
          description: 'Databases',
          icon: 'casino'
        }
      ],
      ruta: this.$route.params.id,
    }
  },

  mounted () {

  },

  beforeDestroy () {
  },

  methods: {

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

.q-input-target{
  height: 10px !important;
}

.q-img__content > div {
  background: none !important;
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
