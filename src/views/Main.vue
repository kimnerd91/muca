<template>
  <MainNav></MainNav>
  <MainTab></MainTab>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import MainNav from "@/components/Main_Nav";
import MainTab from "@/components/Main_Tab";
import MainBlank from "@/components/Main_Blank";

import MainList from "@/components/Main_List";
import MainGrid from "@/components/Main_Grid";

export default {
  name: "AppMain",
  components: {
    Nav,
    MainNav,
    MainBlank,

    MainList,
    MainGrid,
    MainTab,
  },
};
</script>
