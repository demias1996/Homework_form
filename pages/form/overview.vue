<template>
  <div class="overview-wrapper">
    <div class="field-wrapper">
      <p class="field-title">First name:</p>
      <p class="field-value">{{ info.firstName }}</p>
    </div>
    <div class="field-wrapper">
      <p class="field-title">Last name:</p>
      <p class="field-value">{{ info.lastName }}</p>
    </div>
    <div class="field-wrapper">
      <p class="field-title">E-mail:</p>
      <p class="field-value">{{ info.email }}</p>
    </div>
    <div class="field-wrapper">
      <p class="field-title">Membership:</p>
      <p class="field-value">{{ info.membership }}</p>
    </div>
    <div
      v-for="[key, value] in phones"
      v-show="value"
      :key="key"
      class="field-wrapper"
    >
      <p class="field-title first-leter-uppercase">{{ `${key} phone:` }}</p>
      <p class="field-value">{{ value }}</p>
    </div>
    <p @click="showModal = true" class="edit-btn">Edit</p>
    <modal @close="showModal = false" v-show="showModal">
      <div class="modal-content-wrapper">
        <div class="container">
          <p class="section-title">Personal info</p>
          <personal-info-fields />
        </div>
        <div class="container">
          <p class="section-title">Membership</p>
          <membership-fields />
        </div>
      </div>
    </modal>
  </div>
</template>
<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import IPhones from "../../types/IPhones";
import Modal from "../../components/Modal.vue";
import PersonalInfoFields from "../../components/PersonalInfoFields.vue";
import MembershipFields from "../../components/MembershipFields.vue";

const form = namespace("form");

@Component({
  components: {
    Modal,
    MembershipFields,
    PersonalInfoFields,
  },
  data() {
    return {
      showModal: false,
    };
  },
})
export default class Overview extends Vue {
  @form.State
  public info!: object;

  @form.Getter
  public phones!: IPhones;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

.overview-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.field-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
}

.field-title,
.field-value {
  width: 50%;
  text-align: left;
  margin: 0;
}

.field-title {
  font: normal normal bold 18px/24px Roboto;
  color: #394556;
  display: inline-block;
}

.field-value {
  font: normal normal normal 18px/24px Roboto;
  color: #394556;
}

.first-leter-uppercase::first-letter {
  text-transform: uppercase;
}

.edit-btn {
  align-self: flex-start;
  border: hidden;
  outline: hidden;
  background: white;
  color: #15b0fc;
  font: normal normal normal 18px/24px Roboto;
  cursor: pointer;
  margin: 0;
  padding-bottom: 31px;
}

.modal-content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container {
  max-width: 50%;
}

.section-title {
  font: normal normal bold 34px/45px Roboto;
  color: #15b0fc;
  margin: 0;
  padding-bottom: 35px;
}
</style>
