<template>
  <div
    class="albumVideo d-flex justify-content-center px-4"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <swiper
      class="mySwiper swiper-container"
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :spaceBetween="10"
    >
      <swiper-slide
        class="swiper-slide card_slide justify-content-center col-10"
        v-for="(item, index) in video"
        :key="index"
        :href="item.path"
        :style="{
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'background-color': '#c9495f',
        }"
        @click="navigateToVideo(item.path)"
      >
        <div class="thumbnail">
          <img :src="item.img" alt="" />
        </div>
        <div class="text col-12">
          <h3 class="d-flex gap-2">
            <span>{{ item.title }}</span>
          </h3>
          <h6>{{ item.album }}</h6>
          <p class="d-flex align-items-center">
            <i class="fa-regular fa-clock"></i>{{ item.time }}
          </p>
        </div>
        <div class="opacity"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import scan from "@/assets/img/scan.png";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "트랙",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cardid: 0,
      mySwiper: null,
      scanImage: scan,
      thumbnail:
        "https://th.bing.com/th/id/OIP.b8KhD4q1tTdsrOHPcW2lrQHaFF?rs=1&pid=ImgDetMain",
      video: [
        {
          img: "https://image.ytn.co.kr/general/jpg/2015/1021/201510211016464048_d.jpg",
          index: "01",
          title: "새신발",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://www.youtube.com/watch?v=IUd2826Dmjo",
        },
        {
          img:
            "https://i.namu.wiki/i/pX9NNQHWMBpjMAYTDeIAAhUbjyIEHH527_AouDAPhGpsfFm5YGoUd7nttqb-FddTD1wlLDiGyw7gPwJ3j8tKPEogk_ji7ydf7iskzFxuBXROqfxwQqD-EsQaMVbJuZZYBjYegEJYTuRyUNv7GhoDSw.webp",
          index: "02",
          title: "Zeze",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/zfRs5hJuh98?si=t-i_2T6Kx6XLf80F",
        },
        {
          img:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/97e899b6-8367-4c4c-9418-6a77294f2c9b/d9dztx0-44c4292b-e0a0-4013-a207-1c0a3f8233d5.jpg/v1/fill/w_894,h_894,q_70,strp/iu___chat_shire_by_jaeyeons_d9dztx0-pre.jpg",
          index: "03",
          title: "스물셋",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/42Gtm4-Ax2U?si=0eKh2g_ORgFQ11Dr",
        },
        {
          img: "https://t1.daumcdn.net/cfile/tistory/227A89505686567D1C",
          index: "04",
          title: "푸르던",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/TRTquokWSCw?si=tvC2-BCWG4TxgJzW",
        },
        {
          img:
            "https://th.bing.com/th/id/R.57909a6d99fb96d4f327fbfeb9bf5e33?rik=7zBvRVrLSfUqCA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f39100000%2f151230-IU-CHAT-SHIRE-Encore-Concert-iu-39170166-820-1233.jpg&ehk=vu2DflpAQmDjch0UD1eTFgvJaqYG05Sx%2fOoKArpLvzU%3d&risl=&pid=ImgRaw&r=0",
          index: "05",
          title: "Red Queen (Feat.Zion.T)",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/6pFJDR4myaQ?si=hKm148XT-QfnY-x6",
        },
        {
          img: "https://t1.daumcdn.net/cfile/tistory/22080146566E944222",
          index: "06",
          title: "무릎",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/L1JUfCyeT5E?si=9Ev-ZxPFoD0vO2DP",
        },
        {
          img: "https://t1.daumcdn.net/cfile/tistory/256D9346566E947A3D",
          index: "07",
          title: "안경",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/hBRvbKKzkro?si=7-U-8sUecXUNjqUO",
        },
        {
          img: "https://t1.daumcdn.net/cfile/tistory/236949505686560228",
          index: "08",
          title: "마음",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/lcmgCqO5R6I?si=U5wYoQX6W_kxezE3",
        },
        {
          img:
            "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https:%2F%2Ft1.daumcdn.net%2Fcfile%2Fblog%2F21082C4956360B8714",
          index: "09",
          title: "Twenty Three",
          album: "CHAT-SHIRE",
          time: "03:12",
          path: "https://youtu.be/VxbTyMtGorg?si=QuiM7JkPv4fsxBNV",
        },
      ],
    };
  },
  mounted() {
    this.cardid = this.$route.query.cid;
    AOS.init();
    this.$emit("video-array-length", this.video.length);
    this.cardDetail();
     this.addLargerClass();
  },

  methods: {
     addLargerClass() {
    // Vue.js의 $nextTick()을 사용하여 Vue가 DOM 업데이트를 처리한 후 실행
    this.$nextTick(() => {
      // 각 <span> 요소를 가져옴
      const spans = document.querySelectorAll('.text span');

      // 각 요소에 대해 루프를 돌며 길이를 확인하고 larger 클래스 추가
      spans.forEach(span => {
        if (span.offsetWidth >= 100) {
          span.classList.add('larger');
        }
      });
    });
  },
    cardDetail() {
      var vm = this;
      axios
        .get("/api/use/cardInfoDetail/?cardId=" + this.cardid)
        .then(function (response) {
          vm.cardinfo = response.data[0];
          vm.videosize = JSON.parse(response.data[0].videoFileName).length;
          vm.imgsize = JSON.parse(response.data[0].imgList).length;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    navigateToVideo(path) {
      // 예시로 새 창에서 열기
      window.location.href = path;
    },
  },
};
</script>
