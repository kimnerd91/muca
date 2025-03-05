<template>
  <div class="mainCard d-flex justify-content-center px-4" data-aos="fade-up" data-aos-duration="1000">
    <swiper class="mySwiper swiper-container" :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="10">
      <swiper-slide class="swiper-slide card_slide col-11" v-for="(item, index) in cardlist" :key="index" :style="{
      'background-image': `url(http://116.125.141.139:8810/card/mainimage/${item.cardImgName})`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }" @click="navigateToPlayer(item.cardId)">
        <div class="text col-12" >
          <h3>{{ item.cardName }}</h3>
          <p>{{ item.singerName }}</p>
        </div>
        <div class="opacity"></div>
      </swiper-slide>
      <swiper-slide class="swiper-slide card_slide col-11">
        <div class="card_Blank col-12 d-flex align-items-center justify-content-center flex-column gap-3">
          <button type="button" class="d-flex align-items-center flex-column gap-3">
            <img :src="scanImage" class="col-8" alt="scanImage" />
            <p>카드를 등록해주세요.</p>
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import scan from "@/assets/img/scan.png";
import "aos/dist/aos.css";
import AOS from "aos";

export default {
  name: "mainAlbum",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mySwiper: null,
      scanImage: scan,
      cardlist: [],
    };
  },
  mounted() {
    AOS.init();
    if(sessionStorage.getItem("userId") != undefined) {
      this.userCardList();
    }
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
    navigateToPlayer(cardid) {
      this.$router.push({
        path: "/album/track",
        query: { cid: cardid },
      });
    },
  },
};
</script>
