<template>
  <div class="playerBox col-12 d-flex justify-content-center">
    <div class="col-12 player d-flex justify-content-between align-items-center">
      <div class="InfoBox d-flex align-items-center gap-3" @click="playerOpen">
        <div class="CoverBox">
          <img
            :src="'http://116.125.141.139:8810/card/mp3img/'+sstrackinfo.songimg"
            alt="Track Image"
          />
        </div>
        <p >{{ sstrackinfo.songTitle ? sstrackinfo.songTitle : "플레이 리스트가 없습니다" }}</p>
      </div>
      <div class="controlBox">
        <button type="button" @click="togglePlayMP">
          <i class="fa-solid" :class="isplay ? 'fa-pause' : 'fa-play'"></i>
        </button>
      </div>
    </div>
  </div>
  <Player ref="ssplayer"/>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";
import Player from "./Player";

export default {
  components: {
    Player,
  },
  data() {
    return {
      sstrackList: [],
      sstrackinfo: {},
      isplay: true,
      startTime: 0,
      endTime: 0,
    };
  },
  methods: {
    someChildFunction(sid) {
      if (sessionStorage.getItem("trackList") != undefined) {
        this.sstrackList = JSON.parse(sessionStorage.getItem("trackList"));
        for(var i = 0; i < this.sstrackList.length; i++) {
          if(this.sstrackList[i].songId === sid) {
            this.sstrackinfo = this.sstrackList[i];
          }
        }
        this.$refs.ssplayer.songtest(sid);
      }
    },
    togglePlayMP(){
      this.$refs.ssplayer.togglePlay();
    },
    playbutton() {
      this.isplay = !this.isplay
    },
    playerOpen() {
      this.$refs.ssplayer.playshow();
    },
  },
  setup() {
    // AOS 초기화
    AOS.init();
  },
};
</script>
