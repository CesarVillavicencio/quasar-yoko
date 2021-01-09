<template>
<div class="flex flex-center">
<q-page class="flex-center q-px-lg" style="max-width: 375px">
  <!-- buscador -->
  <div class="row flex-center q-pt-md">
    <div class="col-10">
      <q-input class="ft" rounded outlined :dense="true">
        <template v-slot:prepend>          
          <q-icon name="search"></q-icon>
        </template>

      </q-input>        
    </div>

    <div class="col-2">
      <q-icon name="o_shopping_cart" class="q-ml-md" style="font-size: 25px"></q-icon>
    </div>

  </div>
  <!--  -->

  <!-- mensajes de bienvenida -->
  <div class="row q-pt-lg">
    <p class="welcome col-12">Hi, Ana Maria Castrillon Rejon</p> 
    <p class="text-weight-bold titulo">Recommendations</p>
  </div>
  <!--  -->

  <!-- Publicidad -->
  <q-img
    class ="publicidad"
    src="~assets/900x300.png">
  </q-img>
  <!--  -->

  <div class="row q-pt-md justify-between">
    <div class="col-6" >
      <q-select outlined v-model="category" :options="options" label="Category" dense/>
    </div>
    
    <div class="col-5">
      <q-select outlined v-model="order" :options="options" label="Order" dense/>
    </div>
  </div>

  <div class="row q-pt-md q-gutter-lg">

    <q-card class="product flex flex-center"">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$4 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/paper.png"> </q-img>
        </div>          
        
        <p class="productTitle">Tissue paper</p>
        <q-btn class="btnAdd" color="black" no-caps @click="showLoading()">
          <p class="absolute-center">Add to cart</p>
        </q-btn>
    
      </q-card-section>
    </q-card> 

    <q-card class="product flex flex-center"">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$20 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/silla.png"> </q-img>
        </div>          
        
        <p class="productTitle">Artesanal Chair</p>
        <q-btn class="btnAdd" color="black" no-caps @click="showLoading()">
          <p class="absolute-center">Add to cart</p>
        </q-btn>

      </q-card-section>
    </q-card> 

    <q-card class="product flex flex-center"">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$8 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/flauta.png"> </q-img>
        </div>          
        
        <p class="productTitle">Artesanal Flute</p>
        <q-btn class="btnAdd" color="black" no-caps @click="showLoading()">
          <p class="absolute-center">Add to cart</p>
        </q-btn>

      </q-card-section>
    </q-card> 

    <q-card class="product flex flex-center">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$10 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/silla2.png"> </q-img>
        </div>          
        
        <p class="productTitle">Artesanal Chair</p>
        <q-btn class="btnAdd" color="black" no-caps @click="showLoading()">
          <p class="absolute-center">Add to cart</p>
        </q-btn>
      </q-card-section>
    </q-card> 

    <q-card class="product flex flex-center">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$10 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/silla2.png" > </q-img>
        </div>          
        
        <p class="productTitle">Chair</p>
        <q-btn class="btnAdd" color="black" no-caps @click="showLoading()">
          <p class="absolute-center">Add to cart</p>
        </q-btn>
      </q-card-section>
    </q-card> 

    <q-card class="product flex flex-center"">
      <q-card-section>
        <div class="price">
          <p class="absolute-center">$8 dls</p>
        </div>
        
        <div class="imgContainer flex flex-center">
          <q-img class="q-mt-xs imgSize" src="~assets/products/flauta.png"> </q-img>
        </div>          
        
        <p class="productTitle">Flute</p>
        <q-btn class="btnAdd" color="black" no-caps @click="alert = true">
          <p class="absolute-center">Add to cart</p>
        </q-btn>

      </q-card-section>
    </q-card> 
    <!--  -->

    <q-dialog v-model="alert">
      <q-card style="max-width: 375px">
        <q-card-section  class="row items-center q-pb-none">
          <div class="text-h6">Flute</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-img class="" src="~assets/products/flauta.png"> </q-img>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>


        <q-card-actions align="center">
          <q-btn class="btnAdd" color="black" no-caps>
            <p class="absolute-center">Add to cart</p>
          </q-btn>
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    
  </div>

</q-page>
</div>
  
</template>

<script>
import { mapGetters } from "vuex"
import moment from 'moment'
import {Loading, QSpinnerGears} from 'quasar'

export default {
  data(){
    return{
      name: 'App',
      datos:[],
      ruta: this.$route.params.id,
      alert:false,
      category:'',
      order:'',

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

    showLoading () {
      this.$q.loading.show()

      // hiding in 5s
      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        this.timer = void 0
      }, 1000)

      this.$q.notify({
        color: 'black',
        position: 'top',
        message: 'Producto Agregado al carrito',
        icon: 'schedule'
      })
    }


  }

}
</script>

<style>
.ft{
  width: 100% !important
}

.welcome{
  /*color: #a9a9a9;*/
  margin-bottom: 0 !important;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
}

.titulo{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

}

.publicidad{
  width: 100%;
  /*height: 93px;*/
  border-radius: 6px;
}

.product{
  width: 150px;
  height: 180px;
}

.price{
  width: 62px;
  height: 28px;
  background: #FED501;
  border-radius: 5px;
  position:relative;
}

.price p{
  width: 100%;
  font-family: Roboto;
  /*font-style: normal;*/
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;
}

.btnAdd{
  width: 125px;
  height: 30px;
  background:#000000;
  border-radius: 6px;
}

.btnAdd p{
  width: 100%;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  text-align: center;
}

.productTitle{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  /*display: flex;*/
  align-items: center;
  text-align: center;
  margin-bottom: 5px !important;
}

.imgContainer{
  width: 100%;
  position: relative;
}

.imgSize{
  width: 65px;
  height: 65px;
  text-align: center;
}
</style>
