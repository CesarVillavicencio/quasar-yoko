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
      <p class="text-weight-bold titulo">House Rules</p>

       <q-img
        class ="vertical-top rounded-borders"
        src="~assets/900x300.png"        
        contain>
      </q-img>

      <div class="row q-pt-lg">
        <q-icon name="smoke_free" class="q-pr-md" style="font-size: 25px"></q-icon>
        <q-icon name="child_care" style="font-size: 25px"></q-icon>
      </div>

      <div class="texto q-pt-md" v-if="datos.data">
      <!-- <p>
        1.- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nisi ac dui efficitur hendrerit sit amet at justo. 
      </p>
      <p>
         2.-Fusce a efficitur massa.  uspendisse pretium eu diam eget dictum. Phasellus sed enim commodo, fermentum enim nec, maximus arcu.
      </p>

      <p>
        3.- Fusce quis augue vel augue ultrices euismod sit amet pretium nulla. Phasellus quis lorem imperdiet, bibendum dolor ut, malesuada tellus. Mauris facilisis leo lectus, a ullamcorper nunc accumsan at. 
      </p>
      <p>
        4.- Fusce finibus leo non lacinia rutrum. In finibus lacus ut lectus ornare, nec iaculis neque faucibus.   
      </p>
      <p>
        5.- Praesent diam felis, sagittis in quam a, mattis ullamcorper magna. Duis augue felis,congue sed sagittis sed, laoreet ac sem. , 
      </p>

      <p>
        6.- Praesent vitae sapien a ipsum rhoncus molestie vitae in diam. Maecenas id tempus lectus. Morbi convallis rutrum felis
      </p> -->

      {{datos.data.rules}}
      </div>

      <!-- <div class="fixed-bottom sixe " >
        <q-toolbar slot="footer" class="q-mt-xl bg-grey-3 shadow-2 rounded-borders centersize">

          <q-btn flat round dense icon="o_thumb_up" class="q-mr-sm" to="/" />
          <q-space />
          <q-btn flat round dense icon="o_home" class="q-mr-sm" to="/homeinformation" />
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
export default {
  data:function(){
    return{
      name: 'App',
      text: 'esto es texto',
      number:1,
      datos:[],
      propiedades:[],
      ruta: this.$route.params.id,
    }    
  },

  mounted(){
    this.loadData(), this.loadPropiedad();
  },

  computed: {
    ...mapGetters('datos', [
            'getInformacion',
        ]),
    
  },

  methods:{
    test(){
      alert("boton action");
      },

    loadData () {
      // alert("entrando");
      
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

      loadPropiedad(){
      this.$axios.get('https://y.codigorex.com/api/v1/r/8v2B03n4jOY5qyZ')
      .then((response) => {
        this.propiedades = response.data
        console.log(this.propiedades);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Usando notificaciones',
            icon: 'report_problem'
          })
        })
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
