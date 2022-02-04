<template>
  <personal-info-fields />
</template>
<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";

import PersonalInfoFields from "../../components/PersonalInfoFields.vue";

@Component({
  components: {
    PersonalInfoFields,
  },
})
export default class PersonalInfo extends Vue {}
</script>
