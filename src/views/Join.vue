<template>
  <Header></Header>
  <div style="background-color: #fff">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Join_Header.vue";
import Login from "@/components/Join_Login.vue";

export default {
  name: "JoinView",
  components: {
    Header,
    Login,
  },
};
</script>
