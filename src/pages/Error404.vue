<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        <div class="flex flex-center">
          <img
          class ="yokologo"
          alt="yoko logo"
          src="~assets/yokoLogo.png"
          >
        </div>
      </div>

      <!-- <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div> -->

      <q-btn
        class="q-mt-xl"
        color = "yellow"
        text-color="black"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>

    <div class="col-12">
      <q-input color="black" bg-color="white" filled v-model="text" label="IDReserva">
        <template v-slot:prepend>
          <q-icon name="linear_scale" />
        </template>
      </q-input>
      <q-btn
        class="q-mt-xs"
        color = "yellow"
        text-color="black"
        unelevated
        to="/"
        label="Go Reservation"
        no-caps
        @click="goToRoute()"
      />
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      name: 'Error404',
      text:''
    }    
  },

  mounted(){

  },

  computed: {
    
  },

  methods:{
    goToRoute(){
      if (this.text != "") {
        this.$router.push(this.text);
      }
      else {
        this.$q.notify({
        color: 'yellow',
        textColor:'black',
        position: 'top',
        message: 'Need a reservation Code',
        icon: 'block'
        })
      }

      
    },

  }

}
</script>

