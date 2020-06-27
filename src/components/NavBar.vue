<template>
  <div>
    <!-- Navbar con logo e items 'Artistas', Artículos y Admin -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Logo -->
      <b-navbar-brand href="#">Actual Music</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Items alineados a la derecha -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Artistas'}" 
              class="navbar_item-blanco"
            >Artistas</router-link>
          </b-nav-item>
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Articulos'}"
              class="navbar_item-blanco"
            >Artículos</router-link>
          </b-nav-item>
          <b-nav-item right href="#">
            <router-link 
              :to="{name: 'Admin'}"
              class="navbar_item-blanco"
            >Administración</router-link>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.navbar_item-blanco {
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: white;
  }
}

</style>