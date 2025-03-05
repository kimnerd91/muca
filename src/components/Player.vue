<template>
  <div class="playerDiv position-fixed col-12" :class="{ visible: isPlayerVisible }" style="z-index: 99999"
    :style="{
    backgroundImage: `url('http://116.125.141.139:8810/card/mp3img/${sstrackinfo.songimg}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    top: `${isPlayerVisible ? 0 : 100}%`, // Dynamic top value
    transition: 'top 1s ease, opacity 1s ease, visibility 1s ease', // Add visibility transition
    zIndex: '99999',
    opacity: isPlayerVisible ? 1 : 0, // Set opacity based on isPlayerVisible
    visibility: isPlayerVisible ? 'visible' : 'hidden', // Set visibility based on isPlayerVisible
  }">
    <div class="px-4">
      <div class="d-flex playerHeader align-items-center">
        <div class="d-flex align-items-center justify-content-between col-12">
          <button type="button" class="d-flex align-items-center" @click="playerclose">
            <i class="fa-solid fa-chevron-left" style="opacity: 0.7"></i>
          </button>
          <button type="button" class="d-flex align-items-center" @click="toggleModal">
            <span v-show="!isModalOpen">가사</span>
            <span v-show="isModalOpen">닫기</span>
            <i class="fa-solid fa-list"></i>
          </button>
        </div>
      </div>
      <div class="playerControl">
        <div>
          <h3>{{ currentTrack ? currentTrack.title : "No Title" }}</h3>
          <p>{{ currentTrack ? currentTrack.album : "No Album" }}</p>
        </div>
        <div class="d-flex align-items-center justify-content-between">
          <button type="button" class="position-relative">
            <i class="fa-solid fa-repeat" @click="toggleRepeat"></i><span v-if="this.repeatState === 1"
              :class="{ 'purple-color': repeatState === 1 }">1</span>
            <span v-if="this.repeatState === 2" :class="{ 'purple-color': repeatState === 1 }">All</span>
          </button>

          <div class="d-flex mainControl align-items-center">
            <i class="fa-solid fa-backward-step" @click="playPrevTrack"></i>
            <div class="playAndpause">
              <i class="fa-solid" :class="isPlaying ? 'fa-pause' : 'fa-play'" @click="togglePlay"></i>
            </div>
            <i class="fa-solid fa-forward-step" @click="playNextTrack"></i>
          </div>
          <i class="fa-solid fa-shuffle" @click=""></i>
        </div>
        <div class="progressBar">
          <input type="range" v-model="progress" @input="seek" max="100" class="progress"
            :class="{ increasing: isIncreasing }" />
          <div class="d-flex justify-content-between align-items-center">
            <span>{{ playTime }}</span>
            <span>{{ endTime }}</span>
          </div>
        </div>
      </div>
      <div class="opacity"></div>
      <audio v-if="sstrackinfo" ref="audioElement" :src="'http://116.125.141.139:8810/card/mp3/'+ songsrc"></audio>
    </div>
  </div>         

  <!-- Modal -->
  <div class="modal fade lyrics" id="lyric" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    v-show="isModalOpen" data-aos="flip-right" data-aos-duration="1000" style="z-index: 100000 !important">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable lyricDialog" data-aos="flip-right">
      <div class="modal-content lyricModal">
        <div class="modal-body">
                 <textarea readonly>
I'm 23 난 수수께끼 (Question)
뭐게요 맞혀봐요
I'm 23 틀리지 말기 
because 난 몹시 예민해요 맞혀봐 

한 떨기 스물셋 좀 아가씨 태가 나네 
다 큰 척해도 적당히 믿어줘요 
얄미운 스물셋 아직 한참 멀었다 
얘 덜 자란 척해도 대충 속아줘요

난,그래 확실히 지금이 좋아요 아냐, 
아냐 사실은 때려 치고 싶어요 아 알겠어요
나는 사랑이 하고 싶어 아니 돈이나 많이 벌래 맞혀봐 

어느 쪽이게? 얼굴만 보면 몰라 속마음과
다른 표정을 짓는 일 아주 간단하거든 
어느 쪽이게? 사실은 나도 몰라 애초에 나는 
단 한 줄의 거짓말도 쓴 적이 없거든 여우인 척, 
하는 곰인 척 하는 여우 아니면 아예 다른 거 

어느 쪽이게? 뭐든 한 쪽을 골라 
색안경 안에 비춰지는 거 뭐 이제 익숙하거든 
Check it out 

겁나는 게 없어요 엉망으로 굴어도 
사람들은 내게 매일 친절해요 
인사하는 저 여자 모퉁이를 돌고도 아직 웃고 있을까

늘 불안해요 난, 영원히 아이로 남고 싶어요 
아니, 아니 물기 있는 여자가 될래요
아 정했어요 난 죽은 듯이 살래요 아냐, 
다 뒤집어 볼래 맞혀봐

어느 쪽이게? 얼굴만 보면 몰라 속마음과
다른 표정을 짓는 일 아주 간단하거든 
어느 쪽이게? 사실은 나도 몰라 애초에 나는 
단 한 줄의 거짓말도 쓴 적이 없거든 여우인 척, 
하는 곰인 척 하는 여우 아니면 아예 다른 거 

어느 쪽이게? 뭐든 한 쪽을 골라
색안경 안에 비춰지는 거 뭐 이제 익숙하거든 
난 당신 맘에 들고 싶어요 아주

살짝만 얄밉게 해도 돼요? 난 당신 맘에 들고 싶어요 
자기 머리 꼭대기 위에서
놀아도 돼요? 맞혀봐 어느 쪽이게? 

얼굴만 보면 몰라 속마음과 다른 표정을 짓는 일
아주 간단하거든 어느 쪽이게? 
사실은 나도 몰라 애초에 나는 단 한 줄의 거짓말도
쓴 적이 없거든 여우인 척, 하는 곰인 척 

하는 여우 아니면 아예 다른 거 어느
쪽이게? 뭐든 한 쪽을 골라 색안경 
안에 비춰지는 거 뭐 이제 익숙하거든
          </textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Player",
  components: {},
  data() {
    return {
      sstrackList: [],
      sstrackinfo: {},
      songsrc: '',
      pplayer: new Audio(),
      isPlayerVisible: false,
      isPlaying: false,
      progressbarHandler: null,
      progress: 0,
      playTime: "00:00",
      endTime: "",
      isIncreasing: false,
      repeatState: 2,
      isModalOpen: false,
    };
  },
  methods: {
    songtest(sid) {
      this.pplayer.pause();
      this.progress = 0;
      if (sessionStorage.getItem("trackList") != undefined) {
        this.sstrackList = JSON.parse(sessionStorage.getItem("trackList"));
        for(var i = 0; i < this.sstrackList.length; i++) {
          if(this.sstrackList[i].songId === sid) {
            this.sstrackinfo = this.sstrackList[i];
          }
        }
        var ssrc = this.sstrackinfo.songsrc.slice(1);
            ssrc = ssrc.slice(0, -1);
        this.songsrc = ssrc;
        this.msrc = "http://116.125.141.139:8810/card/mp3/" + ssrc;
        this.pplayer = new Audio(this.msrc);
        this.pplayer.play();
        this.isPlaying = true;
        this.isPlayerVisible = true;
        this.start();
      }
    },
    togglePlay() {
      if(this.isPlaying ){
        this.$parent.playbutton()
        this.stop()
        this.pplayer.pause();
      } else {
        this.$parent.playbutton()
        this.start();
        this.pplayer.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    start() {
      if (this.progressbarHandler == null) {
        this.progressbarHandler = setInterval(this.updateProgressbar, 1000);
      }
    },
    stop() {
      if (this.progressbarHandler != null) {
        clearInterval(this.progressbarHandler);
        this.progressbarHandler = null;
      }
    },
    updateProgressbar() {
      const min = Math.floor(this.pplayer.duration / 60);
      const sec = Math.floor(this.pplayer.duration % 60);
      const totMin = min.toString().padStart(2, "0");
      const totSec = sec.toString().padStart(2, "0");
      this.endTime = `${totMin}:${totSec}`;
      
      this.plwd = 100 / this.pplayer.duration;;
      this.progress += this.plwd;
      let ctTime = this.pplayer.currentTime;
      let pmin = Math.floor(ctTime / 60);
      let psec = Math.floor(ctTime % 60);
      let ctMin = pmin.toString().padStart(2, "0");
      let ctSec = psec.toString().padStart(2, "0");
      this.playTime = `${ctMin}:${ctSec}`;
      if (this.pplayer.duration == ctTime) {
        // this.next();
      }
    },
    playerclose() {
      this.isModalOpen = false;
      this.isPlayerVisible = false;
    },
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
      if (this.isModalOpen) {
        AOS.init({
          duration: 1000,
        });
      }
    },
    playshow() {
      this.isPlayerVisible = true;
    },
  },
};
</script>

<style>
.increasing {
  background-color: red;
}

.modal.fade.lyrics:not(.show) {
  display: block;
  opacity: 1;
}

.initial-visible {
  visibility: visible;
  opacity: 1;
  top: 0;
}

.visible {
  visibility: visible !important;
  /* Add !important to override inline styles */
  opacity: 1;
  top: 0;
}
</style>
