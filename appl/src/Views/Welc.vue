<template>
  <div id="welc">
    <form validate id="form" @submit.prevent="send">
      <div id="notif" v-if="error">Please enter a valid url</div>
      <h2>Start Searching</h2>
      <b-form-input class="form" v-model="url" placeholder="Linkedin profile" required></b-form-input>
      <button type="submit">SEND</button>
      <div class="spinner">
        <b-spinner v-if="loading" type="grow" label="Spinning"></b-spinner>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  computed: {},
  data: () => {
    return {
      url: "",
      error: false,

      loading: false,
    };
  },
  methods: {
    send: function () {
      this.loading = true;
      axios
        .post("http://localhost:3000/profile", { data: this.url })
        .then(() => {
          this.error = false;
          this.$router.push({ name: "profile", params: { url: this.url } });
        });
    },
  },
};
</script>



<style>
* {
  margin: 1rem;
}

#welc {
  height: 100vh;
  display: flex;
  justify-content: center;
}
#form {
  margin-top: 8rem;
  padding: 1rem;
}

.form {
  padding: 1rem;
}
button {
  padding: 0.5rem;
  width: 100%;
  border-style: none;
  border-radius: 0.1rem;
  background-color: steelblue;
}
.spinner {
  text-align: center;
}
</style>