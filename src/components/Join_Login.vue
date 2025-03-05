<template>
  <div
    class="Login position-relative px-4 d-flex flex-column"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="col-12 d-flex flex-column align-items-start">
      <label>E-mail</label>
      <input
        type="email"
        name="email"
        class="col-12"
        v-model="email"
        placeholder="이메일을 입력해주세요."
        :style="{ 'border-color': isEmailValidated && !isEmailValid ? 'red' : '' }"
      />
    </div>
    <div class="col-12 d-flex flex-column align-items-start">
      <label for="">비밀번호</label>
      <input
        type="password"
        name="nickname"
        class="col-12"
        v-model="password"
        placeholder=""
      />
    </div>
    <div class="autoLogin d-flex align-items-center">
      <div
        class="custom-checkbox"
        @click="toggleCheckbox"
        :class="{ checked: isChecked }"
      >
        <div class="checkbox-inner">
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
      <div>
        <p>자동로그인</p>
      </div>
    </div>
    <div class="routerDiv d-flex align-items-center justify-content-center">
      <div>
        <router-link to="/join/Nickname">
          <p>회원가입</p>
        </router-link>
      </div>
      <div>
        <router-link to="/account/passwordOG">
          <p>비밀번호 찾기</p>
        </router-link>
      </div>
    </div>
    <div class="joinBtn">
      <button class="col-12" @click="login()">로그인</button>
    </div>
  </div>
</template>
<script>
import "aos/dist/aos.css";
import axios from "axios";
import AOS from "aos";
export default {
  data() {
    return {
      isChecked: false,
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // const checkbox = document.getElementById('flexSwitchCheckDefault');
      // const is_checked = checkbox.checked;
      var vm = this;
      axios
        .get("/api/use/login?email=" + this.email + "&password=" + this.password)
        .then(function (response) {
          if (response.data.length > 0) {
            // if(is_checked){
            //   // vm.$cookies.set('autto', is_checked);
            //   vm.$cookies.set('accountId', vm.userId);
            //   vm.$cookies.set('password', vm.password);
            // };
            sessionStorage.setItem("userId", response.data[0].userId);
            sessionStorage.setItem("accountId", response.data[0].accountId);
            sessionStorage.setItem("email", response.data[0].email);
            vm.$router.push({ path: "/" });
          } else {
            alert("ID / PWD 확인해 주세요.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    toggleCheckbox() {
      this.isChecked = !this.isChecked;
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>
