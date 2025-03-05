<template>
  <div class="Login position-relative px-4 d-flex flex-column justify-content-between" data-aos="fade-up" data-aos-duration="1000">
 <div>
      <div class="joinpage col-12 d-flex flex-column align-items-start mb-4">
        <h5>
          <p>약관동의</p>
          를 확인해주세요.
        </h5>
      </div>
      <div class="termsDiv col-12 d-flex flex-column align-items-start">
        <div class="checkboxDiv d-flex align-items-center">
          <div
            class="custom-checkbox"
            @click="toggleCheckbox('all')"
            :class="{ checked: isChecked.all }"
          >
            <div class="checkbox-inner">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
          <button type="button">
            <p :class="{ active: isChecked.all }">전체동의</p>
          </button>
        </div>
        <div class="checkboxDiv d-flex align-items-center">
          <div
            class="custom-checkbox"
            @click="toggleCheckbox('privacy')"
            :class="{ checked: isChecked.privacy }"
          >
            <div class="checkbox-inner">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
          <button type="button" data-bs-toggle="modal" data-bs-target="#personalInfo">
            <p :class="{ active: isChecked.privacy }">[필수] 개인정보 처리방침</p>
          </button>
        </div>
        <div class="checkboxDiv d-flex align-items-center">
          <div
            class="custom-checkbox"
            @click="toggleCheckbox('usageInfo')"
            :class="{ checked: isChecked.usageInfo }"
          >
            <div class="checkbox-inner">
              <i class="fa-solid fa-check"></i>
            </div>
          </div>
          <button type="button" data-bs-toggle="modal" data-bs-target="#howto">
            <p :class="{ active: isChecked.usageInfo }">[필수] 이용정보</p>
          </button>
        </div>
      </div>
    </div>
    <div class="joinBtn d-flex align-items-center col-12">
      <button
        class="col-12 w-100"
        :class="{ active: isButtonActive }"
        data-bs-toggle="modal"
        data-bs-target="#complete"
        @click="handleNext"
      >
        회원가입
      </button>
    </div>
  </div>

  <!-- 모달 - 개인정보 -->
  <div
    class="modal fade"
    id="personalInfo"
    tabindex="-1"
    role="dialog"
    aria-labelledby="saveModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <p>개인정보처리방침</p>
        </div>
        <div class="modal-body">
          <p>개인정보처리방침</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
            @click="handleModalConfirm('privacy')"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 모달 - 이용정보 -->
  <div
    class="modal fade"
    id="howto"
    tabindex="-1"
    role="dialog"
    aria-labelledby="saveModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <p>이용정보</p>
        </div>
        <div class="modal-body">
          <p>이용정보</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
            @click="handleModalConfirm('usageInfo')"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 모달 - 회원가입완료 -->
  <div
    class="modal fade"
    id="complete"
    tabindex="-1"
    role="dialog"
    aria-labelledby="saveModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <p>{{ isChecked.modalMessage }}</p>
        </div>
        <div class="modal-footer justify-content-center">
          <router-link to="/">
            <button
              v-if="this.isChecked.all == true"
              type="button"
              class="btn"
              data-bs-dismiss="modal"
            >
              확인
            </button>
          </router-link>

          <button
            v-if="this.isChecked.all == false"
            type="button"
            class="btn"
            data-bs-dismiss="modal"
          >
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
      isChecked: {
        all: false,
        privacy: false,
        usageInfo: false,
        modalMessage: "회원가입이 완료되었습니다!",
      },
    };
  },
  computed: {
    isButtonActive() {
      return this.isChecked.all && this.isChecked.privacy && this.isChecked.usageInfo;
    },
  },
  methods: {
    toggleCheckbox(type) {
      if (type === "all") {
        // Toggle all checkboxes
        this.isChecked.all = !this.isChecked.all;
        this.isChecked.privacy = this.isChecked.all;
        this.isChecked.usageInfo = this.isChecked.all;
      } else {
        // Toggle individual checkboxes
        this.isChecked[type] = !this.isChecked[type];

        // Update '전체동의' checkbox based on individual checkboxes
        if (this.isChecked.privacy && this.isChecked.usageInfo) {
          this.isChecked.all = true;
        } else {
          this.isChecked.all = false;
        }
      }
    },
    handleModalConfirm(type) {
      // 모달에서 확인 키를 눌렀을 때 호출되는 메서드
      this.isChecked[type] = true;

      // Update '전체동의' checkbox based on individual checkboxes
      if (this.isChecked.privacy && this.isChecked.usageInfo) {
        this.isChecked.all = true;
      } else {
        this.isChecked.all = false;
      }
    },
    handleNext() {
      if (this.isButtonActive) {
        this.updateModalMessage("회원가입이 완료되었습니다!");
      } else {
        // 버튼이 비활성화된 경우에는 모달 내부의 메시지 변경
        this.updateModalMessage("약관에 동의해주세요");
        // 모달을 보이도록 설정 (예: 모달을 보여주는 상태를 저장하는 데이터 속성을 추가해야 함)
        // this.isModalVisible = true;
      }
    },
    updateModalMessage(message) {
      // 모달 내부의 메시지를 변경하는 메서드
      this.isChecked.modalMessage = message;
    },
  },
   mounted() {
    AOS.init();
  },
};
</script>
