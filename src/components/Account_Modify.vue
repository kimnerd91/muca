<template>
  <div data-aos="fade-up" data-aos-duration="1000" class="pwdOG px-4 position-relative">
    <div class="d-flex pwdHeader align-items-center">
      <div class="d-flex align-items-center">
        <router-link to="/account/accountview">
          <button type="button" class="d-flex align-items-center">
            <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
          </button>
        </router-link>
      </div>
      <div>
        <h5>회원정보 수정</h5>
      </div>
    </div>
    <div class="modify d-flex flex-column justify-content-center align-items-center">
      <div class="icon position-relative" :style="{ 'background-image': iconBackground }">
        <i class="fa-solid fa-user" :style="{ opacity: isImageSelected ? 0 : 1 }"></i>
        <div class="position-absolute upload">
          <button type="button">
            <input type="file" accept="image/*" @change="handleImageUpload">
            <i class="fa-solid fa-camera"></i>
          </button>
        </div>
      </div>
      <div class="col-12 d-flex flex-column align-items-start">
        <label for="pwdOG">닉네임</label>
        <input
          type="text"
          name="nickname"
          class="col-12"
          v-model="nickname"
          placeholder="닉네임을 입력해주세요."
        />
      </div>
      <div class="col-12 d-flex flex-column align-items-start">
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          class="col-12"
          v-model="email"
          placeholder="johndoe@email.com"
          :style="{ 'border-color': isEmailValidated && !isEmailValid ? 'red' : '' }"
        />
      </div>
    </div>
    <div class="modifyBtn ">
      <button
        type="button"
        :class="{ active: isButtonActive }"
        :data-bs-toggle="isButtonActive ? 'modal' : null"
        :data-bs-target="isButtonActive ? '#save' : null"
        @click="handleButtonClick"
      >
        수정완료
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
      <div class="modal-content">
        <div class="modal-body">
          <p>수정되었습니다.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn" data-bs-dismiss="modal">확인</button>
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
      email: "",
       selectedImage: null,
        isEmailValid: false,
      isEmailValidated: false,
    };
  },
 computed: {
    isButtonActive() {
  return (this.nickname !== "" || this.isEmailValid) && this.isEmailValidated;
},
     iconBackground() {
      if (this.selectedImage) {
        return `url(${URL.createObjectURL(this.selectedImage)})`;
      }
      return 'none';
    },
     isImageSelected() {
      return this.selectedImage !== null;
    },
      isEmailValid() {
      // Replace the regex with your desired email validation pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
  },
  methods: {
    handleImageUpload(event) {
      const fileInput = event.target;
      this.selectedImage = fileInput.files[0];
    },
    handleButtonClick() {
         this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
      this.isEmailValidated = true;

      if (!this.isButtonActive) {
        alert("닉네임 또는 이메일을 입력해주세요.");
      }
      // Your existing button click logic here
    },
  },
    mounted() {
    AOS.init();
  },
};
</script>
