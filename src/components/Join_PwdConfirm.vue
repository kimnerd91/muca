<template>
  <div class="Login position-relative px-4 d-flex flex-column" data-aos="fade-up" data-aos-duration="1000">
    <div class="joinpage col-12 d-flex flex-column align-items-start">
      <h5>
        <p>비밀번호</p>
        를 한번 더 입력해주세요.
      </h5>
    </div>
    <div class="col-12 d-flex flex-column align-items-start">
      <label for="email">password Confirm</label>
      <input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        class="col-12"
        v-model="passwordConfirm"
        placeholder="패스워드를 입력해주세요."
        @input="handleInput"
      />
      <!-- Error and success messages -->
      <p v-if="showError" class="text-danger alert">비밀번호가 일치하지 않습니다.</p>
      <p v-if="showSuccess" class="text-success alert">비밀번호가 일치합니다.</p>
    </div>
    <div class="joinBtnDouble d-flex align-items-center justify-content-between px-4">
      <button class="col-12" @click="handlePrevious">
        이전
      </button>
      <button class="col-12" :class="{ active: isButtonActive }" @click="handleNext">
        다음
      </button>
    </div>
  </div>

  <!-- 모달 -->
  <div
    v-if="isModalVisible"
    class="modal fade"
    id="email"
    tabindex="-1"
    role="dialog"
    aria-labelledby="saveModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered w-75 mx-auto">
      <div class="modal-content">
        <div class="modal-body">
          <p>비밀번호를 입력해주세요.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn" @click="handleModalClose">
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
      passwordConfirm: "",
      isModalVisible: false,
      password: "",
      showError: false,
      showSuccess: false,
    };
  },
  computed: {
    isButtonActive() {
      return (
        this.passwordConfirm !== undefined &&
        !!this.passwordConfirm.trim() &&
        this.passwordConfirm.length >= 4 &&
        this.passwordConfirm === this.password
      );
    },
    passwordConfirmError() {
      return this.password !== this.passwordConfirm;
    },
  },
  methods: {
    handlePrevious() {
      // Handle the logic for the previous button
      // You can customize this as per your requirements
      console.log("Previous button clicked");
    },
    handleNext() {
      if (this.isButtonActive) {
        this.$router.push({
          path: "/join/terms",
          query: { password: this.password },
        });
      } else {
        // Open the modal
        this.isModalVisible = true;
      }
    },
    handleModalClose() {
      // Close the modal
      this.isModalVisible = false;
    },
    handleInput() {
      // Show/hide error and success messages based on input
      this.showError = this.passwordConfirmError && this.passwordConfirm.length > 0;
      this.showSuccess = !this.passwordConfirmError && this.passwordConfirm.length > 0;
    },
  },
  created() {
    // Retrieve the password from the query parameter
    this.password = this.$route.query.password || "";
  },
   mounted() {
    AOS.init();
  },
};
</script>