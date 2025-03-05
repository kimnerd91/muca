<template>
  <div class="notify px-4 position-relative" data-aos="fade-up" data-aos-duration="1000">
    <div class="d-flex notifyHeader align-items-center">
      <div class="d-flex align-items-center">
           <button type="button" class="d-flex align-items-center" @click="goBack">
          <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
        </button>
      </div>
      <div>
        <h5>알림</h5>
      </div>
    </div>

    <div class="list text-left col-12">
      <ul class="d-flex flex-column">
        <li v-for="(bb, i) in 10" :key="i">
          <!-- router-link를 사용하여 동적으로 URL을 설정 -->
          <router-link :to="'/notify/board/' + (10 - i)">
            <h5 class="d-flex">알림 제목 <span>N</span></h5>
            <p>알림 내용입니다.</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  data() {
    return {
     
    };
  },
     mounted() {
    AOS.init();
  },
  methods: {
     goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1);
    },
  },
  

};
</script>
