<template>
  <div>
    <router-link :to="'/perfi/' + token">Ver perfil</router-link>
    <router-link :to="'/perfi/'+token">Ver compras</router-link>
    <router-link to="/nueva-compra"> Nueva compra</router-link>
  </div>
</template>

<script>
export default {
  name: "SeguridadComponent",
  data() {
    return {
      token: "",
    };
  },
  mounted() {
    this.token = this.$route.params.token;
  },
};
</script>

<style></style>
