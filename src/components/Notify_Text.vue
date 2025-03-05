<template>
  <div class="notify px-4 position-relative" data-aos="fade-up" data-aos-duration="1000">
    <div class="d-flex notifyHeader align-items-center">
      <div class="d-flex align-items-center">
        <button type="button" class="d-flex align-items-center" @click="goBack">
          <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
        </button>
      </div>
      <div></div>
    </div>

    <div class="board text-left col-12">
      <h3>알림 제목</h3>
      <h6>2024-01-01</h6>
      <p>알림알림</p>
    </div>
  </div>
</template>
<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  data() {
    return {};
  },
     mounted() {
    AOS.init();
  },

  created() {
    // 현재 동적 세그먼트 값 확인
    const id = this.$route.params.id;
    console.log(id);
  },
   methods: {
    goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1);
    },
  },
};
</script>
