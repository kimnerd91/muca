<template>
  <div class="Login position-relative px-4 d-flex flex-column" data-aos="fade-up" data-aos-duration="1000">
    <div class="joinpage col-6 d-flex flex-column align-items-start">
      <h5>
        <p>사용할 닉네임</p>
        을 입력해주세요.
      </h5>
    </div>
     <div class="col-12 d-flex flex-column align-items-start">
      <label for="nickname">닉네임</label>
      <input
        type="text"
        id="nickname"
        name="nickname"
        class="col-12"
        v-model="nickname"
        placeholder="닉네임"
      />
    </div>
    <div class="joinBtn">
      <button class="col-12" :class="{ active: isButtonActive }" @click="handleNext">
        다음
      </button>
    </div>
  </div>

  <!-- 모달 -->
  <div
    v-if="isModalVisible"
    class="modal fade"
    id="nickname"
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
          <p>닉네임을 입력해주세요.</p>
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
      nickname: "",
      isModalVisible: false,
    };
  },
  computed: {
    isButtonActive() {
      return !!this.nickname.trim();
    },
  },
  methods: {
    handleNext() {
      if (this.isButtonActive) {
        this.$router.push("/join/email");
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