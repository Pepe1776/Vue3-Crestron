<template>
  <div class="container">
    <div class="main grid grid-rows-7 grid-cols-5 place-items-center">
      <Ch5button id="200" class="col-start-3 row-start-3"
        ><Icon icon="cil:chevron-top" width="8rem"
      /></Ch5button>
      <Ch5button id="201" class="col-start-3 row-start-5"
        ><Icon icon="cil:chevron-bottom" width="8rem"
      /></Ch5button>
      <Ch5button id="202" class="col-start-2 row-start-4 place-self-end"
        ><Icon icon="cil:chevron-left" width="8rem"
      /></Ch5button>
      <Ch5button id="203" class="col-start-4 row-start-4 place-self-start"
        ><Icon icon="cil:chevron-right" width="8rem"
      /></Ch5button>
      <Ch5button id="204" class="row-start-4 col-start-3"
        ><Icon icon="cil:circle" width="8rem"
      /></Ch5button>
      <Ch5slider id="220" class="row-start-2 col-start-3"></Ch5slider>
    </div>
  </div>
</template>

<script>
import Ch5button from "./Ch5button.vue";
import Ch5slider from "./Ch5slider.vue";
import { Icon } from "@iconify/vue";
export default {
  components: {
    Ch5button,
    Ch5slider,
    Icon,
  },
};
</script>

<style></style>
