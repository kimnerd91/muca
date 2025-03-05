<template>
  <div class="albumVideo d-flex justify-content-center px-4" data-aos="fade-up" data-aos-duration="1000">
    <swiper class="mySwiper swiper-container" :slidesPerView="'auto'" :centeredSlides="true" :spaceBetween="10">
      <swiper-slide class="swiper-slide card_slide col-10" v-for="(item, index) in trackList" :key="index" :style="{
      'background-image': `url(http://116.125.141.139:8810/card/mp3img/${item.songimg})`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }" @click="test(item.songId)">
        <div class="text col-12">
          <h3 class="d-flex gap-2">
            <span>{{ index + 1 }}</span><span>{{ item.songTitle }}</span>
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
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref, computed, provide } from "vue";
import { useStore } from "vuex";
import store from "../assets/store/store.js";

// Import Swiper styles
import "swiper/css";
import VueAudio from "vue-audio"; // vue-audio 추가
import scan from "@/assets/img/scan.png";
import AOS from "aos";

export default {
  name: "트랙",
  components: {
    VueAudio, // vue-audio 등록
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cardid: '',
      trackList: [],

      playerDivTop: 0,
      isPlayerVisible: true,
      selectedTrack: null,
      selectedTrackIndex: null,
      abc: false,
      abcd: false,
      mySwiper: null,
      scanImage: scan,
      currentIndex: 0,
    };
  },
  mounted() {
    this.cardid = this.$route.query.cid;
    AOS.init();
    this.trackListfunc();
  },

  // setup() {
  //   const store = useStore();
  //   const isPlayerVisible = computed(() => store.getters.getPlayerVisibility);

  //   // Provide the isPlayerVisible value to the component tree
  //   provide("isPlayerVisible", isPlayerVisible);

  //   const navigateToPlayer = (index) => {
  //     // ... (existing code)

  //     // Dispatch an action to update player visibility
  //     store.dispatch("updatePlayerVisibility", isPlayerVisible.value);
  //   };

  //   return {
  //     isPlayerVisible,
  //     navigateToPlayer,
  //   };
  // },
  methods: {
    test(sid) {
        
        if (sessionStorage.getItem("playCardId") !== this.cardid) {
          sessionStorage.setItem("playCardId", this.cardid );
          sessionStorage.setItem("trackList", JSON.stringify(this.trackList));
          this.$emit('player', sid);
        } else {
          this.$emit('player', sid);
        }

    },
    trackListfunc() {
      var vm = this;
      axios.get("/api/use/cardSongDetail?cardId=" + this.cardid)
      .then(function (response) {
        vm.trackList = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },

    // hidePlayer(top) {
    //   this.playerDivTop = top;
    //   this.isPlayerVisible = false;
    // },
    // navigateToPlayer(index) {
    //   if (index >= 0 && index < this.track.length) {
    //     const selectedTrack = this.track[index];
    //     const selectedTrackIndex = selectedTrack.index;

    //     // Set the selected track data and index in component's data properties
    //     this.selectedTrack = selectedTrack;
    //     this.selectedTrackIndex = selectedTrackIndex;
    //     this.isPlayerVisible = true;
    //     this.abcd = true;

    //     store.dispatch("updatePlayerVisibility", true);

    //     // Store the selected track data and index in localStorage
    //     sessionStorage.setItem("selectedTrack", JSON.stringify(selectedTrack));
    //     sessionStorage.setItem("trackAll", JSON.stringify(this.track));
    //     sessionStorage.setItem("selectedTrackIndex", JSON.stringify(selectedTrackIndex));
    //   } else {
    //     console.error("Invalid index or track data.");
    //   }
    //   if (store.getters.getPlayerVisibility) {
    //     console.log("Player is visible!");
    //     // Perform additional actions if the player is visible
    //   } else {
    //     console.log("Player is not visible.");
    //     // Perform additional actions if the player is not visible
    //   }
    // },
    // navigateAndHidePlayer() {
    //   // Perform your navigation logic
    //   this.navigateToPlayer(0); // Replace with the appropriate index or method

    //   // Dispatch the Vuex action to update player visibility to false
    //   store.dispatch("updatePlayerVisibility", false);
    // },
  },
};
</script>
