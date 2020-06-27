<template>
  <div class="home">
    <!-- Destacados de hoy (Esta vista se llama Artistas)-->
    <destacados></destacados>
  </div>
</template>

<script>
import Destacados from '../components/Destacados'

export default {
  name: 'Artistas',
  components: {
    Destacados,
  }
}
</script>
