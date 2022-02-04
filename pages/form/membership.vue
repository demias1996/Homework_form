<template>
  <membership-fields />
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import MembershipFields from "../../components/MembershipFields.vue";

@Component({
  components: {
    MembershipFields,
  },
})
export default class Membership extends Vue {}
</script>
