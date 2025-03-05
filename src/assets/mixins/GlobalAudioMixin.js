export const globalAudioMixin = {
    data() {
        return {
            globalAudio: new Audio(),
            isPlaying: false,
            currentTrack: null,
        };
    },
    methods: {
        playGlobalAudio(src) {
            this.globalAudio.src = src;
            this.globalAudio.play();
            this.isPlaying = true;
        },
        pauseGlobalAudio() {
            this.globalAudio.pause();
            this.isPlaying = false;
        },
        setGlobalAudioTrack(track) {
            this.currentTrack = track;
        },
    },
    beforeDestroy() {
        this.globalAudio.pause();
    },
};