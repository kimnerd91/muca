<template>
  <div class="qrcode px-4 position-relative" data-aos="fade-up" data-aos-duration="1000">
    <div class="d-flex qrheader align-items-center">
      <div class="d-flex align-items-center">
        <button type="button" class="d-flex align-items-center" @click="goBack">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div></div>
    </div>

    <div class="scan text-left col-12">
      <p>카드의 QR코드를 스캔하세요.</p>
      <div class="camera mx-auto">
        <video ref="cameraVideo" width="100%" height="100%" autoplay></video>
        <div class="cameracross"></div>
        <div class="cameracross2"></div>
      </div>
      <p class="mx-auto mb-0">또는 QR코드 아래 표시된</p>
      <p class="mx-auto">시리얼 번호를 입력해주세요.</p>
      <div class="d-flex serial mx-auto justify-content-around">
        <input type="text" name="" v-model="serial1" placeholder="****" maxlength="4" />
        <input type="text" name="" v-model="serial2" placeholder="****" maxlength="4" />
        <input type="text" name="" v-model="serial3" placeholder="****" maxlength="4" />
        <input type="text" name="" v-model="serial4" placeholder="****" maxlength="4" />
      </div>
      <div>
        <button type="button">등록</button>
      </div>
      <!-- <qrcode-capture @decode="onDecode"></qrcode-capture> -->
    </div>
  </div>
</template>

<script>
import "aos/dist/aos.css";
import AOS from "aos";
import { QrcodeCapture } from "vue-qrcode-reader";

export default {
  components: {
    QrcodeCapture,
  },
  data() {
    return {
      serial1: "",
      serial2: "",
      serial3: "",
      serial4: "",
      cameraStream: null,
      isQrCodeDecoded: false,
      camera: "auto",
      serial: "",
    };
  },
  mounted() {
    AOS.init();
  },

  created() {
    const id = this.$route.params.id;
    console.log(id);

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.cameraStream = stream;
        this.$refs.cameraVideo.srcObject = stream;
      })
      .catch((error) => {
        console.error("카메라에 접근할 수 없습니다:", error);
      });
  },
  methods: {
    goBack() {
      this.$router.go(-1);

      if (this.cameraStream) {
        const tracks = this.cameraStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    },
    onDecode(result) {
      console.log("QR 코드 디코딩됨:", result);

      this.isQrCodeDecoded = true;
      this.serial = result;

      // QR 코드 디코딩 성공 시 알림 창 띄우기
      if (this.isQrCodeDecoded) {
        alert("성공");
      }
    },
    stopCamera() {
      if (this.cameraStream) {
        const tracks = this.cameraStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    },
    startFrontCamera() {
      this.camera = "front";
    },

    onCameraChange(promise) {
      promise.catch((error) => {
        const cameraMissingError = error.name === "OverconstrainedError";
        const triedFrontCamera = this.camera === "front";

        if (triedFrontCamera && cameraMissingError) {
          // no front camera on this device
        }
      });
    },
  },
};
</script>

<style>
video {
  object-fit: cover;
  border-radius: 53px;
}
</style>