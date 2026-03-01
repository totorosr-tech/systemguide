<template>
  <main class="guide">
    <h1 class="guide__title">Design System Guide</h1>

    <section class="guide__section">
      <h2 class="guide__subtitle">Buttons</h2>
      <div class="guide__row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="primary" :disabled="true">Disabled</Button>
      </div>
    </section>

    <section class="guide__section">
      <h2 class="guide__subtitle">Select</h2>
      <div class="guide__row">
        <Select
          v-model="selectedStatus"
          :options="statusOptions"
          placeholder="Select status"
        />
        <Select
          :model-value="'pending'"
          :options="statusOptions"
          :disabled="true"
        />
      </div>
    </section>
  </main>
</template>

<script>
import Button from "../components/button/Button.vue";
import Select from "../components/select/Select.vue";

export default {
  name: "Guide",
  components: { Button, Select },
  data() {
    return {
      selectedStatus: "",
      statusOptions: [
        { label: "Pending", value: "pending" },
        { label: "Approved", value: "approved" },
        { label: "Rejected", value: "rejected" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.guide {
  padding: 40px;
}

.guide__title {
  font-size: 28px;
  margin-bottom: 24px;
}

.guide__subtitle {
  font-size: 20px;
  margin-bottom: 16px;
}

.guide__section + .guide__section {
  margin-top: 32px;
}

.guide__row {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}
</style>
