<template>
  <div class="test">
    <div class="test__title">
      test

      <TextBox name="test" type="1" placeholder="test" />
    </div>
  </div>
</template>
<script setup lang="ts">
import TextBox from '@/components/TextBox.vue'
</script>
<style lang="scss" scoped>
.test {
  &__title {
    background: $orange;
  }
}
</style>
