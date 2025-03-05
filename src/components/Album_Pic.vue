<template>
  <div class="imgbox" data-aos="fade-up" data-aos-duration="1000">
    <ul class="d-flex flex-wrap align-items-center justify-content-between">
      <li v-for="(item, index) in images" :key="index" class="col-6">
        <img :src="'http://116.125.141.139:8810/card/gallery/'+ item" alt="" @click="openLightbox(index)" />
      </li>
    </ul>
    <vue-easy-lightbox :visible="lightboxVisible" :imgs="lightboxImages" :index="lightboxIndex"
      @hide="closeLightbox"></vue-easy-lightbox>
  </div>
</template>

<script>
import axios from 'axios';
import VueEasyLightbox from "vue-easy-lightbox";
import { ref, defineComponent } from "vue";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      cardid: 0,
      lightboxImages: [],
      lightboxVisible: false,
      lightboxIndex: 0,

      images: [],
    };
  },
  methods: {
    cardDetail() {
      var vm = this;
      axios.get("/api/use/cardInfoDetail/?cardId=" + this.cardid)
      .then(function (response) {
        vm.images = JSON.parse(response.data[0].imgList);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    openLightbox(index) {
      this.lightboxImages = this.images.map((image) => ({
        src: 'http://116.125.141.139:8810/card/gallery/' + image,
      }));
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
    closeLightbox() {
      this.lightboxVisible = false;
    },
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([]);


    const onShow = () => {
      visibleRef.value = true;
    };
    const showSingle = () => {
      imgsRef.value = "http://via.placeholder.com/350x150";
      onShow();
    };
    const showMultiple = () => {
      imgsRef.value = [
        "http://via.placeholder.com/350x150",
        "http://via.placeholder.com/350x150",
      ];
      indexRef.value = 0; // index of imgList
      onShow();
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showSingle,
      showMultiple,
      onHide,
    };
  },
  mounted() {
    this.cardid = this.$route.query.cid;
    AOS.init();
    this.cardDetail();
  },
};
</script>
