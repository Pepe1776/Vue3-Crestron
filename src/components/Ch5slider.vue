<template>
  <input
    type="range"
    min="1"
    max="65535"
    v-model="value"
    @input="onInput"
    @change="onChange"
  />
</template>

<style scoped>
input {
  width: 200px;
}
input::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}

/* All the same stuff for IE */
input::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}
input::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: rgb(0, 195, 255);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input:focus::-webkit-slider-runnable-track {
  background: rgb(0, 195, 255);
}

input::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: rgb(0, 195, 255);
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input::-ms-fill-lower {
  background: rgb(0, 195, 255);
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input:focus::-ms-fill-lower {
  background: rgb(0, 195, 255);
}
input::-ms-fill-upper {
  background: rgb(0, 195, 255);
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input:focus::-ms-fill-upper {
  background: rgb(0, 195, 255);
}
</style>

<script>
export default {
  name: "CrestronSlider",
  props: {
    id: Number,
  },
  data: function () {
    return {
      //value: 0,
    };
  },
  computed: {
    value: {
      get: function () {
        return this.$store.state.aRxSignals[this.id];
      },
      set: function (newValue) {
        this.$store.dispatch("sendAnalogSignal", {
          id: this.id,
          value: Number(newValue),
        });
      },
    },
  },
  methods: {
    onChange: function () {
      console.log("onChange");
      console.log(this.value);
      this.$store.dispatch("sendAnalogSignal", {
        id: this.id,
        value: Number(this.value),
      });
    },
    onInput: function () {
      console.log("onInput");
      console.log(this.value);
      this.$store.dispatch("sendAnalogSignal", {
        id: this.id,
        value: Number(this.value),
      });
    },
  },
};
</script>
