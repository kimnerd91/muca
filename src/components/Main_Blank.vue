<template>
  <div class="mainCard d-flex justify-content-center px-4" data-aos="fade-up" data-aos-duration="1000">
    <div
      class="card_Blank col-12 d-flex align-items-center justify-content-center flex-column gap-3"
    >
      <button type="button" class="d-flex align-items-center flex-column gap-3">
        <img :src="scanImage" class="col-8" alt="scanImage" />
        <p>카드를 등록해주세요.</p>
      </button>
    </div>
  </div>
</template>
<script>
import scan from "@/assets/img/scan.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  name: "mainAlbum",
  data() {
    return {
      scanImage: scan,
      card: [
        {
          img: "https://image.ytn.co.kr/general/jpg/2015/1021/201510211016464048_d.jpg",
          title: "CHAT-SHIRE",
          artist: "IU",
        },
        {
          img: "https://image.ytn.co.kr/general/jpg/2015/1021/201510211016464048_d.jpg",
          title: "CHAT-SHIRE",
          artist: "IU",
        },
        {
          img: "https://image.ytn.co.kr/general/jpg/2015/1021/201510211016464048_d.jpg",
          title: "CHAT-SHIRE",
          artist: "IU",
        },
        {
          img: "https://image.ytn.co.kr/general/jpg/2015/1021/201510211016464048_d.jpg",
          title: "CHAT-SHIRE",
          artist: "IU",
        },
      ],
    };
  },
     mounted() {
    AOS.init();
  },
};
</script>
