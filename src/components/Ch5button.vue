<template>
  <button
    ref="button"
    @mousedown="mousedown()"
    @mouseup="mouseup()"
    @touchstart="touchstart()"
    @touchend="touchend()"
    :class="[{ active: feedback }]"
  >
    <slot />
  </button>
</template>

<style scoped></style>

<script>
export default {
  name: "CrestronButton",
  props: {
    id: String,
  },
  computed: {
    feedback: function () {
      console.log("feedback");
      return this.$store.state.dRxSignals[this.id];
    },
    touchDevice: function () {
      return "ontouchstart" in document.documentElement;
    },
  },
  methods: {
    buttonPressed: function () {
      console.log("buttonPressed", this.id);
      this.$store.dispatch("sendDigitalSignalHigh", this.id);
    },
    buttonReleased: function () {
      console.log("buttonReleased", this.id);
      this.$store.dispatch("sendDigitalSignalLow", this.id);
    },
    mousedown: function () {
      if (!this.touchDevice) {
        this.buttonPressed();
      }
    },
    mouseup: function () {
      if (!this.touchDevice) {
        this.buttonReleased();
      }
    },
    touchstart: function () {
      if (this.touchDevice) {
        this.buttonPressed();
      }
    },
    touchend: function () {
      if (this.touchDevice) {
        this.buttonReleased();
      }
    },
  },
};
</script>
