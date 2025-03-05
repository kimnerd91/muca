<template>
    <ul class="d-flex justify-content-between pl-0 col-11 mx-auto">
      <li>
        <router-link to="/">
          <button type="button" class="btn" @click="handleButtonClick(1)">
            <i class="fa-solid fa-house" :class="{ active: activeButton === 1 }"></i>
          </button>
        </router-link>
      </li>
      <li>
        <router-link to="/QR">
          <button type="button" class="btn" @click="handleButtonClick(2)">
            <i class="fa-solid fa-camera" :class="{ active: activeButton === 2 }"></i>
          </button>
        </router-link>
      </li>
      <li>
        <router-link v-if="loginYN" to="/account/accountview">
          <button type="button" class="btn" @click="handleButtonClick(3)">
            <i class="fa-solid fa-user" :class="{ active: activeButton === 3 }"></i>
          </button>
        </router-link>
        <router-link v-else to="/join/login">
          <button type="button" class="btn" @click="handleButtonClick(3)">
            <i class="fa-solid fa-user" :class="{ active: activeButton === 3 }"></i>
          </button>
        </router-link>
      </li>
    </ul>
    <div class="marginBar"></div>
</template>

<script>
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  name: "AppNav",
  data() {
    return {
      loginYN: null,
      activeButton: 1,
      dragStartY: 0,
      isDragging: false,
    };
  },
  mounted() {
    this.loginYN = sessionStorage.getItem("userId");
    AOS.init();
  },
  methods: {
    handleButtonClick(index) {
      // 클릭한 버튼의 인덱스를 저장
      this.activeButton = index;
      // 여기에 추가적인 로직을 추가할 수 있습니다.
    },
  },
};
</script>
