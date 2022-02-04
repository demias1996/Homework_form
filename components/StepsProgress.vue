<template>
  <div class="steps-wrapper">
    <template v-for="(item, i) in steps">
      <div
        class="step-item"
        :key="i"
        :class="{
          completed: currentStep - i > 0,
          active: currentStep - i === 0,
        }"
      >
        <div class="step-counter">{{ i + 1 }}</div>
        <div class="step-title">{{ item }}</div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component
export default class StepsProgress extends Vue {
  @Prop({ default: 0 }) currentStep!: number;
  @Prop({ default: () => [] }) steps!: string[];
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap");

.steps-wrapper {
  display: flex;
  justify-content: space-between;
  width: 556px;
}

.step-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.step-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #d5dee4;
  width: 100%;
  top: 26px;
  left: -50%;
  z-index: 2;
}

.step-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #d5dee4;
  width: 100%;
  top: 26px;
  left: 50%;
  z-index: 2;
}

.step-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #d5dee4 0% 0% no-repeat padding-box;
  margin-bottom: 6px;
  font: normal normal 900 28px/37px Roboto;
  color: #ffffff;
}

.step-item.completed .step-counter {
  background-color: #15b0fc;
}

.step-item.active .step-counter {
  color: #15b0fc;
  border: 2px solid #15b0fc;
  background: #eeeeee 0% 0% no-repeat padding-box;
}

.step-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #15b0fc;
  width: 100%;
  top: 26px;
  left: 50%;
  z-index: 3;
}

.step-item .step-title {
  height: 26px;
  font: normal normal normal 20px/26px Roboto;
  color: #394556;
}

.step-item:first-child::before {
  content: none;
}
.step-item:last-child::after {
  content: none;
}
</style>
