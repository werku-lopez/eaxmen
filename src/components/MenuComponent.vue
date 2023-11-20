<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">RubikStore</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                to="/"
                >Cubos</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                usuario
              </a>
              <ul class="dropdown-menu">
                <li class="nav-item">
                  <router-link
                    class="nav-link active"
                    aria-current="page"
                    to="/logIn"
                    >Log in</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link active"
                    aria-current="page"
                    to="/signIn"
                    >Sign in</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link active"
                    aria-current="page"
                    to="/logOut"
                    >Log out</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu">
                <li v-for="marca in marcas" :key="marca">
                  <router-link
                    class="dropdown-item"
                    :to="'/marca/'+marca"
                    >{{ marca }}</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServicioTienda from "../services/ServicesTienda";
const service = new ServicioTienda();

export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
    };
  },
  mounted(){
    this.loadMarcas();
  }
  ,
  methods: {
    loadMarcas() {
      service.getAllMarcas().then((result) => {
        this.marcas = result;
      });
    },
  },
};
</script>

<style></style>
