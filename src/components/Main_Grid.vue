<template>
  <div class="mainCard d-flex justify-content-center px-4" data-aos="fade-up" data-aos-duration="1000">
    <div class="card_Grid col-12">
      <ul>
        <router-link to="/album/track" class="d-flex flex-wrap">
          <li class="position-relative d-flex align-items-end" v-for="(item, index) in cardlist" :key="index" :style="{
            'background-image': `url(http://116.125.141.139:8810/card/mainimage/${item.cardImgName})`,
            'background-position': 'center',
            'background-size': 'cover',
          }">
            <div class="text d-flex flex-column gap-1 col-10 mx-auto">
              <h3>{{ item.cardName }}</h3>
              <p>{{ item.singerName }}</p>
            </div>
            <div class="opacity"></div>
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
    if (sessionStorage.getItem("userId") != undefined) {
      this.userCardList();
    }
  },
};
</script>
