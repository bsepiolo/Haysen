<template>
  <div class="container">
    <TextBox v-model="testValue" name="test" type="1" placeholder="test" />
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
