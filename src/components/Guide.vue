<template>
  <div class="position-relative guide" data-aos="fade-up" data-aos-duration="1000"
    style="
      background: linear-gradient(
        358deg,
        rgb(255, 122, 222, 0.1) 2.09%,
        rgb(255, 122, 222, 0.1) 2.1%,
        rgb(255, 78, 241, 0.1) 12.97%,
        rgb(231, 75, 255, 0.1) 23.85%,
        rgb(186, 73, 255, 0.1) 34.73%,
        rgb(130, 75, 255, 0.1) 50.07%,
        rgb(34, 94, 255, 0.1) 62.31%,
        rgb(42, 157, 255, 0.1) 78.24%,
        rgb(47, 177, 255, 0.1) 89.12%,
        rgb(97, 207, 255, 0.1) 100%
      )!important;
    "
  >
  <div class="px-4 guideheader">
     <div class="d-flex align-items-center">
        <router-link to="/account/accountview">
          <button type="button" class="d-flex align-items-center">
            <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
          </button>
        </router-link>
      </div>
  </div>
    <img :src="guide" alt="" style="width: 100%; " />

    <div class="guideBtn px-4">
      <router-link to="/account/accountview">
        <button class="col-12">닫기</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import guide from "@/assets/img/guide.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  data() {
    return {
      guide: guide,
    };
  },
    mounted() {
    AOS.init();
  },
};
</script>
