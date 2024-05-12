<template>
  <div class="container">
    <TextBox
      v-model="testValue"
      name="0"
      type="number"
      placeholder="0"
      append-text="zł"
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TextBox from '@/components/TextBox.vue'
const testValue = ref('')
</script>
<style lang="scss" scoped>
.test {
  &__title {
    background: $orange;
  }
}
</style>
