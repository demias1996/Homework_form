<template>
  <div class="form-wrapper">
    <steps-progress :steps="stepTitles" :currentStep="currentStep" />
    <div class="form">
      <div class="content-wrapper">
        <h1 class="form-title">{{ formTitle }}</h1>
        <nuxt-child />
      </div>
      <div class="buttons">
        <v-button
          v-if="!isFirstStep"
          styleType="outline"
          actionType="back"
          title="Back"
          @action="selectButtonHandler"
        />
        <v-button
          v-if="isLastStep"
          title="Submit"
          actionType="submit"
          @action="selectButtonHandler"
        />
        <v-button
          v-else
          title="Continue"
          actionType="continue"
          @action="selectButtonHandler"
        />
      </div>
      <modal v-if="message" @close="message = ''">
        <p class="message">
          {{ message }}
        </p>
      </modal>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import StepsProgress from "../components/StepsProgress.vue";
import VButton from "../components/VButton.vue";
import IStep from "../types/IStep";
import ActionType from "../types/ActionType";
import stepsConfig from "../config/stepsConfig";
import axios from "axios";
import Modal from "../components/Modal.vue";

const form = namespace("form");

@Component({
  components: {
    StepsProgress,
    VButton,
    Modal,
  },
})
export default class Form extends Vue {
  currentStep: number = 0;
  message: string = "";

  @form.State
  public info!: object;

  get steps(): Array<IStep> {
    return stepsConfig;
  }

  get stepTitles(): Array<string> {
    return stepsConfig.map((i) => i.title);
  }

  get formTitle(): string {
    return this.steps[this.currentStep].title;
  }

  get isFirstStep(): boolean {
    return !this.currentStep;
  }

  get isLastStep(): boolean {
    return this.currentStep + 1 === this.steps.length;
  }

  async sendForm(): Promise<any> {
    const headers = {
      "Content-Type": "application/json",
      charset: "utf-8",
    };

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        JSON.stringify(this.info),
        { headers }
      );
      this.message = "Congratulations your data was sended to the server!";
    } catch (e) {
      this.message = "Something went wrong(";
      console.log(e);
    }
  }

  selectButtonHandler(buttonType: ActionType): void {
    if (buttonType === ActionType.BACK) {
      this.$nuxt.$router.push(stepsConfig[this.currentStep - 1].route);
    } else if (buttonType === ActionType.SUBMIT) {
      this.sendForm();
    } else if (buttonType === ActionType.CONTINUE) {
      this.$nuxt.$router.push(stepsConfig[this.currentStep + 1].route);
    }
  }

  beforeRouteEnter(
    to: { path: string },
    from: Object,
    next: (option?: any) => void
  ) {
    if (to.path === "/form") return next("/form/personal-info");
    next();
  }

  beforeRouteUpdate(
    to: { path: string },
    from: Object,
    next: (option?: any) => void
  ) {
    this.currentStep = stepsConfig.findIndex((i) => i.route === to.path);
    next();
  }
}
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

body {
  background: #eeeeee 0% 0% no-repeat padding-box;
  margin-top: 98px;
  display: flex;
  justify-content: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.form {
  border-radius: 8px;
  margin-top: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 16px #0000001a;
  width: 490px;
  min-height: 768px;
  padding: 35px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-title,
.message {
  font: normal normal bold 34px/45px Roboto;
  color: #15b0fc;
  margin: 0;
  padding-bottom: 35px;
}

.message {
  padding-bottom: 0;
}
</style>
