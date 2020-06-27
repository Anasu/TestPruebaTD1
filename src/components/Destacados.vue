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
        <b-card-title :title="item.name"></b-card-title>
        <b-card-text>
          <b-button @click="comentar(item.mbid)">Comentar</b-button>
        </b-card-text>
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
      comentar(id)
      {
        this.$router.push(`/articulos?id=${id}`);
      }
    },
    beforeMount() 
    {
      this.fillDestacados();
    }
}
</script>