<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="pwdOG px-4 position-relative">
    <div class="d-flex pwdHeader align-items-center">
      <div class="d-flex align-items-center">
        <router-link to="/">
          <button type="button" class="d-flex align-items-center">
            <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
          </button>
        </router-link>
      </div>
      <div>
        <h5>비밀번호 변경</h5>
      </div>
    </div>
    <div class="OGBlock">
      <div class="col-7">
        <h3>변경하실 비밀번호를 입력해주세요.</h3>
      </div>
      <div class="col-12 d-flex flex-column">
        <label for="pwdOG">Password</label>
        <input
          type="password"
          name="pwdOG"
          v-model="passwordC"
          placeholder="변경할 비밀번호 입력"
        />
      </div>
    </div>
    <div class="pwdBtn">
      <button
        type="button"
        :class="{ active: isButtonActive }"
        :data-bs-toggle="isButtonActive ? 'modal' : null"
        :data-bs-target="isButtonActive ? '#save' : null"
        @click="handleButtonClick"
      >
        저장
      </button>
    </div>
  </div>

  <!-- 모달 -->

  <div
    class="modal fade"
    id="save"
    tabindex="-1"
    role="dialog"
    aria-labelledby="saveModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered w-75 mx-auto">
      <div class="modal-content ">
        <div class="modal-body">
          <p>{{ isButtonActive && passwordC !== '1234' ? '저장되었습니다.' : '새로운 비밀번호를 입력해주세요.' }}</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn" data-bs-dismiss="modal" @click="handleModalClose">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  data() {
    return {
      passwordC: "",
    };
  },
  computed: {
    isButtonActive() {
      return this.passwordC && this.passwordC.length >= 4; // Check if password is defined before accessing its length
    },
  },
  methods: {
    handleButtonClick() {
      if (!this.isButtonActive) {
        alert("비밀번호를 4글자 이상 입력하세요.");
      }
    },
     handleModalClose() {
      if (this.isButtonActive && this.passwordC !== '1234') {
      this.$router.push("/");
      } else {
        this.$router.push("/account/pwdChange");
      }
    },
  },
    mounted() {
    AOS.init();
  },
};
</script>
