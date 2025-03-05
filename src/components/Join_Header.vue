<template>
  <div class="joinHeader d-flex px-4 col-12 position-relative" data-aos="fade-up" data-aos-duration="1000">
    <div class="d-flex align-items-center position-absolute">
      <button type="button" class="d-flex align-items-center" @click="goBack">
        <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
      </button>
    </div>
    <div class="logobox">
      <router-link to="/account/accountview">
        <img :src="logo" alt="" style="width: 17.3vw" />
      </router-link>
    </div>
  </div>
</template>
<script>
import logo from "../assets/img/MUCA.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  data() {
    return {
      logo: logo,
    };
  },
  methods: {
    goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1);
    },
  },
   mounted() {
    AOS.init();
  },
};
</script>
