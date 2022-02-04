<template>
  <button
    class="button"
    :class="{ outline: styleType === 'outline' }"
    @click="$emit('action', actionType)"
  >
    {{ title }}
  </button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component
export default class VButton extends Vue {
  @Prop({ default: "" }) styleType!: string;
  @Prop({ default: "" }) actionType!: string;
  @Prop({ default: "" }) title!: string;
}
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

.button {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #15b0fc 0% 0% no-repeat padding-box;
  border-radius: 8px;
  font: normal normal bold 28px/37px Roboto;
  color: #ffffff;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
}

.outline {
  color: #15b0fc;
  border: 2px solid #16affc;
  background: none;
}
</style>
