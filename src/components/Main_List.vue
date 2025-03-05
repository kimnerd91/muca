<template>
  <div class="mainCard d-flex justify-content-center px-4" data-aos="fade-up" data-aos-duration="1000">
    <div class="card_list col-12">
      <ul>
      <router-link to="/album/track">
        <li class="d-flex gap-4 align-items-center" v-for="(item, index) in cardlist" :key="index">
          <div class="cover">
            <img :src="'http://116.125.141.139:8810/card/mainimage/' + item.cardImgName" alt="" />
          </div>
          <div class="text d-flex flex-column gap-1">
            <h5>{{ item.cardName }}</h5>
            <h6>{{ item.singerName }}</h6>
          </div>
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
export default {
  data() {
    return {
      cardlist: [],
    };
  },
  methods: {
    userCardList() {
      var vm = this;
      axios.get("/api/use/cardList/?userId=" + sessionStorage.getItem("userId"))
      .then(function (response) {
        vm.cardlist = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  },
  mounted() {
    AOS.init();
    if(sessionStorage.getItem("userId") != undefined) {
      this.userCardList();
    }
  },
};
</script>
