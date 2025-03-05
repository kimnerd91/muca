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
        <h5>1:1 문의</h5>
      </div>
    </div>
    <div class="inquiry d-flex flex-column">
      <div class="col-12 d-flex flex-column">
        <label for="pwdOG">제목</label>
        <input
          type="text"
          name="inquiryTitle"
          v-model="inquiryTitle"
          placeholder="제목을 입력해주세요."
        />
      </div>
      <div class="col-12 d-flex flex-column">
        <label>내용</label>
        <textarea v-model="inquiryContent"></textarea>
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
        문의하기
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
          <p>문의가 전송되었습니다.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn" data-bs-dismiss="modal">
            확인
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
        inquiryTitle: "",
      inquiryContent: "",
    };
  },
  computed: {
    isButtonActive() {
      return this.inquiryTitle !== "" && this.inquiryContent !== "";
    },
  },
  methods: {
    handleButtonClick() {
       if (!this.isButtonActive) {
        alert("문의 내용을 입력해주세요.");
      }
    },
  },
    mounted() {
    AOS.init();
  },
 
};
</script>
