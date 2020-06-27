<template>
  <div>
    <h1>Destacados de esta semana</h1>
    <b-card-group>
      <b-card v-for="(item, index) in getDestacados" 
        :key="index"
        img-top
      >
        <b-card-img
          :src="item.image[1]['#text']"
          :alt="item.name"
          
        ></b-card-img>
        <b-card-title 
          :title="item.name"></b-card-title>
        <template v-slot:footer>
          <small class="text-muted">Ha sido escuchado {{ item.listeners }} veces</small>
        </template>
      </b-card>
    </b-card-group>
  </div>
    
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Destacados',
    computed: {
      getDestacados() {
        return this.$store.getters.getDestacados
      }
    },
    methods: {
      ...mapActions([
        'fillDestacados',
      ]),
    },
    beforeMount: function () {
      this.fillDestacados();
    }
}
</script>