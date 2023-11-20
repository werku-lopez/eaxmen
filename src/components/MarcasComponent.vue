<template>
  <div class="container pt-5">
    <div class="row gap-5">
      <div
        class="card col-md-3"
        style="width: 18rem"
        v-for="cubo in cubos"
        :key="cubo"
      >
        <div class="card-header">
          <img
            src="{{ cubo.imagen }}"
            class="card-img-top"
            alt="{{ cubo.nombre }}"
            width="100%"
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ cubo.nombre }}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            <b>Modelo: </b> {{ cubo.modelo }}
          </h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            <b>Marca: </b>{{ cubo.marca }}
          </h6>
          <p class="card-text"><b>Precio: </b> {{ cubo.precio }}</p>
          <p class="card-text"><b>Valoración: </b> {{ cubo.valoracion }}</p>
          <router-link
            class="btn btn-outline-primary"
            :to="'/cubo/' + cubo.idCubo"
            >Detalles</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ServicioTienda from "../services/ServicesTienda";
const service = new ServicioTienda();

export default {
  name: "MarcasComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    this.loadMarcasCubo();
  },
  methods: {
    loadMarcasCubo() {
      var marca = this.$route.params.marca;
      service.getCubosMarca(marca).then((result) => {
        this.cubos = result;
      });
    },
  },

  watch: {
    "$route.params.marca"(nextVal, oldVal) {
      if (oldVal != nextVal) {
        this.loadMarcasCubo();
      }
    },
  },
};
</script>

<style></style>
