<template>
  <div class="memberships-wrapper">
    <div class="checkboxs">
      <v-checkbox
        v-for="(item, i) in memberships"
        :key="i"
        :title="item.type"
        :checked="membership === item.type"
        @change="changeMembershipType"
      />
    </div>
    <p class="membership-content">
      <span class="selected-membership-type">
        {{ membership }}
      </span>
      {{ selectedMembershipDescription }}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import VCheckbox from "./VCheckbox.vue";
import IMembership from "../types/IMembership";
import MembershipTypes from "../types/MembershipTypes";
import membershipsData from "../config/membershipsData";

const form = namespace("form");

@Component({
  components: {
    VCheckbox,
  },
})
export default class MembershipFields extends Vue {
  @form.State
  public info!: object;

  @form.Getter
  public fullName!: string;

  @form.Getter
  public membership!: MembershipTypes;

  @form.Mutation
  public updateMembership!: (data: MembershipTypes) => void;

  get memberships(): IMembership[] {
    return membershipsData as IMembership[];
  }

  get selectedMembershipDescription(): string {
    return (
      this.memberships.find((i) => i.type === this.membership)?.description ||
      ""
    );
  }

  changeMembershipType(data: MembershipTypes): void {
    this.updateMembership(data);
  }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.membership-content {
  font: normal normal normal 18px/24px Roboto;
  color: #394556;
}

.selected-membership-type {
  font-weight: bold;
  text-transform: lowercase;
  display: inline-block;
}

.selected-membership-type::first-letter {
  text-transform: uppercase;
}
</style>
