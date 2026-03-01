<template>
  <label class="select" :class="{ 'select--disabled': disabled }">
    <select
      class="select__field"
      :value="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <span class="select__icon" aria-hidden="true"></span>
  </label>
</template>

<script>
export default {
  name: "Select",
  props: {
    modelValue: { type: String, default: "" },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: { type: String, default: "" },
    disabled: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"]
};
</script>

<style lang="scss" scoped>
@import "./select.scss";
</style>
