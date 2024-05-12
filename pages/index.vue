<template>
  <div class="wrapper wrapper--small">
    <h1>{{ $t('COST_OF_PURCHASE_BY_COMPANY') }}</h1>
    <TextBox
      v-model="testValue"
      name="totalCost"
      type="number"
      placeholder="0"
      append-text="zł"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TextBox from '@/components/TextBox.vue'
const testValue = ref(10000)
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin: auto;
  padding: 30px 0;

  &--small {
    max-width: 342px;
  }
}
</style>
