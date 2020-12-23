<template>
  <div id="q-app"> 

	    <router-view />
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      name: 'App',
      text: 'esto es texto',
      number:1,
      data:'',
    }    
  },

  mounted(){

  },

  methods:{

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
