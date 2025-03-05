<template>
  <div>
    <AlbumTop :cardData="receivedCardData"></AlbumTop>
    <router-view @player="gettrack"></router-view>
  </div>

</template>

<script>
import AlbumTop from "@/components/Album_Top.vue";

import Nav from "@/components/Nav";

export default {
  name: "album",
  components: {
    AlbumTop,
    Nav,

  },
  methods: {
    gettrack(sid) {
      this.$emit('player', sid);
    }
  },

};
</script>
