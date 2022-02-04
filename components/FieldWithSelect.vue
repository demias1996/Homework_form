<template>
  <field
    class="input-field"
    :value="value"
    :title="'Phone'"
    :type="'text'"
    @change="$emit('change', { key: selectValue, value: $event, index })"
  >
    <select
      @change="
        $emit('change', { key: $event.target.value, value: value, index })
      "
      class="select"
    >
      <option v-for="item in selectOptions" :key="item" :value="item">
        {{ item }}
      </option>
      <option selected :value="selectValue">{{ selectValue }}</option>
    </select>
  </field>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import Field from "./Field.vue";

@Component({
  components: {
    Field,
  },
})
export default class FieldWithSelect extends Vue {
  @Prop({ default: "" }) selectValue!: string;
  @Prop({ default: () => [] }) selectOptions!: Array<string>;
  @Prop({ default: "" }) value!: string;
  @Prop({ required: true }) index!: number;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.select {
  position: absolute;
  width: 105px;
  height: 45px;
  background: #eeeeee 0% 0% no-repeat padding-box;
  border: 2px solid #c8d3db;
  border-radius: 8px 0px 0px 8px;
  padding: 12px 20px;
  box-sizing: border-box;
  font: normal normal normal 16px/21px Roboto;
  color: #394556;
}

.input-field::v-deep .input {
  padding-left: 110px;
}
</style>
