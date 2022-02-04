<template>
  <div class="fields-wrapper">
    <field
      @change="setFirstName"
      :type="'text'"
      :value="info.firstName"
      :title="'First name'"
    />
    <field
      @change="setLastName"
      :type="'text'"
      :value="info.lastName"
      :title="'Last name'"
    />
    <field
      @change="setEmail"
      :type="'email'"
      :value="info.email"
      :title="'E-mail'"
    />
    <field-with-select
      v-for="([key, value], i) in phones"
      :key="i"
      @change="setPhone"
      :value="value"
      :selectValue="key"
      :selectOptions="freePhoneTypes"
      :index="i"
    />
    <p v-if="freePhoneTypes.length" @click="addPhoneItem" class="add-phone-btn">
      + Add phone
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import IPhones from "../types/IPhones";
import Field from "./Field.vue";
import FieldWithSelect from "./FieldWithSelect.vue";
import PhoneTypes from "../types/PhoneTypes";

const form = namespace("form");

@Component({
  components: {
    Field,
    FieldWithSelect,
  },
})
export default class personalInfoFields extends Vue {
  @form.Mutation
  public updateFirstName!: (data: string) => void;

  @form.Mutation
  public updateLastName!: (data: string) => void;

  @form.Mutation
  public addPhone!: (key: PhoneTypes) => void;

  @form.Mutation
  public updateEmail!: (data: string) => void;

  @form.Mutation
  public updatePhone!: (data: Object) => void;

  @form.State
  public info!: object;

  @form.Getter
  public phones!: IPhones;

  @form.Getter
  public freePhoneTypes!: Array<PhoneTypes>;

  setFirstName(data: string): void {
    this.updateFirstName(data);
  }

  setLastName(data: string): void {
    this.updateLastName(data);
  }

  setEmail(data: string): void {
    this.updateEmail(data);
  }

  setPhone(data: Object) {
    this.updatePhone(data);
  }

  addPhoneItem() {
    this.addPhone(this.freePhoneTypes[0]);
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
.add-phone-btn {
  color: #15b0fc;
  font: normal normal normal 18px/24px Roboto;
  cursor: pointer;
  padding-bottom: 31px;
  margin: 0;
}
</style>
