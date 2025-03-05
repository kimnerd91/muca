<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="pwdOG px-4 position-relative">
    <div class="d-flex pwdHeader align-items-center">
      <div class="d-flex align-items-center">
         <button type="button" class="d-flex align-items-center" @click="goBack">
          <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
        </button>
      </div>
      <div>
        <h5>비밀번호 변경</h5>
      </div>
    </div>
    <div class="OGBlock">
      <div class="col-6">
        <h3>기존 비밀번호를 입력해주세요.</h3>
      </div>
      <div class="col-12 d-flex flex-column">
        <label for="pwdOG">Password</label>
        <input
          type="password"
          name="pwdOG"
          v-model="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
    </div>
    <div class="pwdBtn">
      <button :class="{ active: isButtonActive }" @click="handleButtonClick">다음</button>
    </div>
  </div>
</template>
<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  data() {
    return {
      password: "",
    };
  },
  computed: {
    isButtonActive() {
      return this.password && this.password.length >= 4; // Check if password is defined before accessing its length
    },
  },
  methods: {
     goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1);
    },
    handleButtonClick() {
      if (this.isButtonActive && this.password === "1234") {
        this.$router.push("/account/pwdChange");
      } else {
        alert("비밀번호가 일치하지 않습니다.");
        this.$router.push("/account/passwordOG");
      }
    },
  },
    mounted() {
    AOS.init();
  },
};
</script>
