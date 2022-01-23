<template>
  <div class="pop">
    <n-popselect
      class="popselect"
      v-model:value="value"
      :options="options"
      size="large"
    >
      <n-button
        size="large"
        color="#ba181b"
        round
        type="error"
        class="popselect-button"
      >
        <span class="popselect-button-text"> {{ value || "Popselect" }} </span>
      </n-button>
    </n-popselect>
  </div>
</template>

<script>
import { NPopselect, NButton } from "naive-ui";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    NPopselect,
    NButton,
  },
  setup() {
    return {
      value: ref("Sources"),
      options: [
        {
          label: "Watch Direct TV",
          value: "Watch Direct TV",
        },
        {
          label: "Watch Apple TV",
          value: "Watch Apple TV",
        },
        {
          label: "Watch Blueray",
          value: "Watch Blueray",
        },
        {
          label: "Listen to Spotify",
          value: "Listen to Spotify",
        },
        {
          label: "Listen To Pandora",
          value: "Listen To Pandora",
        },
        {
          label: "Listen To Airplay",
          value: "Listen To Airplay",
        },
        {
          label: "Lighting Controls",
          value: "Lighting Controls",
        },
        {
          label: "Scenes",
          value: "Scenes",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.pop {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popselect {
  height: 100%;
  width: 20rem;
  font-weight: 900;
  font-stretch: expanded;
  text-transform: inherit;
}

.popselect-button {
  position: absolute;
  bottom: 15%;
  right: 30%;
  height: 5rem;
  width: 40%;
  font-size: 90%;
}

.popselect-button-text {
  font-size: 4rem;
}
</style>
