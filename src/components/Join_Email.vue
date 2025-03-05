<template>
  <div class="Login position-relative px-4 d-flex flex-column" data-aos="fade-up" data-aos-duration="1000">
    <div class="joinpage col-6 d-flex flex-column align-items-start">
      <h5>
        <p>이메일</p>
        을 입력해주세요.
      </h5>
    </div>
    <div class="col-12 d-flex flex-column align-items-start">
      <label for="email">E-mail</label>
      <input
        type="text"
        id="email"
        name="email"
        class="col-12"
        v-model="email"
        placeholder="이메일을 입력해주세요."
      />
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
          <p>이메일을 입력해주세요.</p>
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
      email: "",
      isModalVisible: false,
    };
  },
  computed: {
    isButtonActive() {
      return !!this.email.trim();
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
        this.$router.push("/join/password");
      } else {
        // Open the modal
        this.isModalVisible = true;
      }
    },
    handleModalClose() {
      // Close the modal
      this.isModalVisible = false;
    },
  },
   mounted() {
    AOS.init();
  },
};
</script>
