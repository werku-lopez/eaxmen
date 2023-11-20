<template>
  <div class="container pt-5">
    <h1 class="mb-5">Inicio de sesión</h1>
    <form v-on:submit.prevent="login()">
      <div class="row g-2">
        <div class="col-md-5">
          <input
            type="text"
            v-model="user.email"
            name="email"
            class="form-control"
            placeholder="email"
          />
        </div>
        <div class="col-md-5">
          <input
            type="text"
            v-model="user.password"
            name="password"
            class="form-control"
            placeholder="password"
          />
        </div>
        <button class="btn btn-outline-primary col-md-2">log in</button>
      </div>
    </form>
  </div>
</template>

<script>
import ServicioTienda from "../services/ServicesTienda";
const service = new ServicioTienda();

export default {
  name: "LoginComponent",
  data() {
    return {
      token: "",
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      service.logIn(this.user).then((result) => {
        this.token = result.response;
        console.log(this.user);
        this.$router.push("/seguridad", this.token);
      });
    },
  },
};
</script>

<style></style>
