<template>
  <div class="maintab px-4 d-flex justify-content-between ">
    <div>
      <ul class="d-flex pl-0 gap-3 align-items-center mb-0">
        <li @click="selectTab('itunes')">
          <router-link to="/" exact>
            <i class="fa-brands fa-itunes-note" :class="{ active: selectedTab === 'itunes' }"></i>
          </router-link>
        </li>
        <li @click="selectTab('list')">
          <router-link to="/list">
            <i class="fa-solid fa-list-ul" :class="{ active: selectedTab === 'list' }"></i>
          </router-link>
        </li>
        <li @click="selectTab('grid')">
          <router-link to="/grid">
            <i class="fa-solid fa-table-cells-large" :class="{ active: selectedTab === 'grid' }"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div style="min-width: 25.3vw" class="custom-select d-flex justify-content-end" @click="toggleCustomOptions">
      <div class="custom-select-trigger gap-2">
        <i class="fa-solid fa-angle-down"></i>
        {{ selectedOption || "등록순" }}
      </div>
      <div class="custom-options" v-if="showOptions">
        <div class="custom-option d-flex gap-2 align-items-center justify-content-between"
          v-for="(option, index) in options" :key="index" :class="{ active: selectedOption === option }"
          @click="selectCustomOption(option)">
          {{ option }}
          <i v-if="selectedOption === option" class="fa-solid fa-check"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "aos/dist/aos.css";
import AOS from "aos";
export default {
  name: "MainTab",
  data() {
    return {
      logo: require("@/assets/img/MUCA.png"),
      showOptions: false,
      selectedOption: "",
      options: ["등록순", "플레이 순"],
      selectedTab: "itunes",
    };
  },
  mounted() {
    AOS.init();
  },
  methods: {
    toggleCustomOptions() {
      this.showOptions = !this.showOptions;
    },
    selectCustomOption(option) {
      this.selectedOption = option;
      this.showOptions = false; // Hide the custom options
    },
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
  },
};
</script>
