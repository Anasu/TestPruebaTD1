<template>
  <div class="articulos">
    <b-card
      overlay
      :img-src="getArtista.image[4]['#text']"
      :img-alt="getArtista.name"
      text-variant="white"
      :title="getArtista.name"
      sub-title="Comentarios"
    >
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Articulos',
  methods: {
    ...mapActions([
      'currentArtist'
    ])
  },
  computed: {
    ...mapGetters([
      'getArtista'
    ])
  },
  beforeMount()
  {
    let aQuery = this.$route.query.id;
    this.currentArtist(aQuery);
  }
}
</script>
