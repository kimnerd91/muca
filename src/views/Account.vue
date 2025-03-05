<template>
  <MainNav></MainNav>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import MainNav from "@/components/Main_Nav";



export default {
  name: "AppMain",
  components: {
    Nav,
    MainNav,

  },
};
</script>
