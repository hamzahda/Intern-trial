<template>
  <div id="app">
    <h1>The Profile Data:</h1>
    <b-spinner v-if="loading" type="grow" label="Spinning"></b-spinner>
    <div class="data">
      <div>Name: {{this.profile.name}}</div>
      <div>Url: {{this.profile.url}}</div>

      <div>City: {{this.profile.city}}</div>
      <div>Position: {{this.profile.job}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .post("http://localhost:3000/profile/get", {
          url: this.$route.params.url,
        })
        .then((profile) => {
          this.loading = false;
          this.profile = profile.data;
        });
    },
  },
  data: () => {
    return {
      error: false,
      loading: false,

      profile: {},
    };
  },
};
</script>


<style>
#profile {
  display: flex;
  justify-content: center;
}
</style>