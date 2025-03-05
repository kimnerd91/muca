<template>
  <router-view  @player="gettrack"/>
  <nav class="fixedNav" >
    <MainPlayer ref="MainPlayer"></MainPlayer>
    <Nav></Nav>
  </nav>
</template>
<script>
import "@/assets/scss/style.scss";

import MainPlayer from "./components/Main_Player.vue";
import Nav from  "./components/Nav.vue"
export default {
  name: "App",
  components: {
    Nav,
    MainPlayer,
  },
  methods: {
    gettrack(sid) {
      this.$refs.MainPlayer.someChildFunction(sid);
    }
  },
};
</script>
