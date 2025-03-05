<template>
  <div class="mainNav d-flex justify-content-between align-items-center px-4">
    <router-link to="/"><img :src="logo" alt="" /></router-link>
    <div class="d-flex gap-3">
      <div class="d-flex justify-content-center align-items-center gap-4">
        <router-link to="/guide/main">
          <span data-text="MUCA 사용방법"></span>
        </router-link>
      </div>
      <router-link to="/notify/list" class="align-items-center d-flex">
        <i class="fa-regular fa-bell"></i>
      </router-link>
    </div>
  </div>
  
</template>
<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  name: "MainNav",
  data() {
    return {
      logo: require("@/assets/img/MUCA.png"),
      showOptions: false,
      selectedOption: "",
      options: ["등록순", "플레이 순"],
      selectedTab: "",
    };
  },
  methods: {
    toggleCustomOptions() {
      this.showOptions = !this.showOptions;
    },
    selectCustomOption(option) {
      this.selectedOption = option;
      this.showOptions === false;
    },
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
  },
     mounted() {
    AOS.init();
  },
};
</script>
