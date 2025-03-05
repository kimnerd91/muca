<template>
  <div class="album">
    <div class="px-4">
      <div class="d-flex albumHeader align-items-center">
        <div class="d-flex align-items-center">
          <button type="button" class="d-flex align-items-center" @click="goBack">
            <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
          </button>
        </div>
        <div></div>
      </div>
      <div class="albuminfo d-flex align-items-center">
        <div class="d-flex align-items-center col-12 justify-content-between">
          <div class="info d-flex align-items-center">
            <div>
              <img :src="'http://116.125.141.139:8810/card/mainimage/' + cardinfo.cardImgName" alt="" />
            </div>
            <div>
              <h5>{{ cardinfo.cardName }}</h5>
              <p>{{ cardinfo.singerName }}</p>
            </div>
          </div>
          <div class="date">
            <p>NO.{{ cardinfo.numbering }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs d-flex">
      <router-link :to="{path : '/album/track', query: {cid: cardid}}" class="col-4">
        <div
          class="d-flex tab align-items-center col-12"
          :class="{ active: activeTab === 'music' }"
          @click="changeTab('music')"
        >
          <i class="fa-brands fa-itunes-note"></i>
          <h6>음악</h6>
          <p>{{ cardinfo.songcount }}</p>
        </div>
      </router-link>
      <router-link :to="{path : '/album/video', query: {cid: cardid}}" class="col-4">
        <div
          class="d-flex tab align-items-center col-12"
          :class="{ active: activeTab === 'video' }"
          @click="changeTab('video')"
        >
          <i class="fa-brands fa-youtube"></i>
          <h6>영상</h6>
          <p>{{ videosize }}</p>
        </div>
      </router-link>
      <router-link :to="{path : '/album/pic', query: {cid: cardid}}"  class="col-4">
        <div
          class="d-flex tab align-items-center col-12"
          :class="{ active: activeTab === 'photo' }"
          @click="changeTab('photo')"
        >
          <i class="fa-regular fa-image"></i>
          <h6>사진</h6>
          <p>{{ imgsize }}</p>
        </div>
      </router-link>
    </div>
  </div>
  <template v-show="abc">
    <AlbumTrack @track-array-length="updateTrackArrayLength" />
    <AlbumPic @picArrayLength="updatepicArrayLength" />
    <AlbumVideo @video-array-length="updatevideoArrayLength" />
  </template>
</template>

<script>
import axios from 'axios';
import "aos/dist/aos.css";
import AOS from "aos";
import AlbumTrack from "./Album_Track.vue";
import AlbumPic from "./Album_Pic.vue";
import AlbumVideo from "./Album_Video.vue";

export default {
  name: "AlbumTop",
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
  components: {
    AlbumTrack,
    AlbumPic,
    AlbumVideo,
  },
  data() {
    return {
      cardid: '',
      cardinfo: {},
      videosize: 0,
      imgsize: 0,
      abc: false,
      activeTab: "music", // Initial active tab
    };
  },
  methods: {
    cardDetail() {
      var vm = this;
      axios.get("/api/use/cardInfoDetail/?cardId=" + this.cardid)
      .then(function (response) {
        vm.cardinfo = response.data[0];
        vm.videosize = JSON.parse(response.data[0].videoFileName).length;
        vm.imgsize = JSON.parse(response.data[0].imgList).length;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    goBack() {
      // 이전 페이지로 이동
      this.$router.go(-1);
    },
    changeTab(tab) {
      this.activeTab = tab;
      // Add logic here to handle tab changes if needed
    },
  },
  mounted() {
    this.cardid = this.$route.query.cid;
    this.cardDetail();
    AOS.init();
    // 현재 경로를 기반으로 activeTab을 설정
    const currentPath = this.$route.path;
    if (currentPath.includes("/album/track")) {
      this.activeTab = "music";
    } else if (currentPath.includes("/album/video")) {
      this.activeTab = "video";
    } else if (currentPath.includes("/album/pic")) {
      this.activeTab = "photo";
    }
  },
};
</script>
<style>
.hidden {
  display: none !important;
}
</style>
