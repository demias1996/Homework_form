<template>
  <div>
    <nuxt-link class="open-form-link" :to="'form'">Open form</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>
<style>
.open-form-link {
  display: block;
  width: 421px;
  height: 64px;
  border: 2px solid #16affc;
  border-radius: 8px;
  text-align: center;
  line-height: 64px;
  color: #15b0fc;
  font-size: 24px;
  margin: 75px auto;
}
</style>
