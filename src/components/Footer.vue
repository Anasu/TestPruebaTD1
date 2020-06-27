<template>
  <div class="footer">
    <b-container>
      <b-row align-v="center">
        <b-col class="footer_rrss">
          <font-awesome-icon :icon="['fab', 'twitter']" />
          <font-awesome-icon :icon="['fab', 'facebook']" />
          <font-awesome-icon :icon="['fab', 'github']" />
        </b-col>
        <b-col class="footer_texto">
          <h3 class="footer_texto-titulo">Actual Music</h3>
          <p class="footer_texto-detalle">Revista de música online</p>
          <p class="footer_texto-detalle">Calle musical, #1234, Comuna, Ciudad</p>
          <p class="footer_texto-detalle">+56 2 8765 4321</p>
          <p class="footer_texto-detalle">contacto@actualmusic.cl</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: darkred;
  color: white;

  &_rrss {
    font-size: 1.75rem;
    text-align: left;

    svg {
      margin: 0 0.5rem;
    }
  }
  
  &_texto {
    text-align: right;

    &-titulo {
      font-size: 1.25rem;
    }

    &-detalle {
      margin-bottom: 0;
      font-size: 0.75rem;
    }
  }
}

</style>