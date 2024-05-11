<template>
  <div class="text-box" :class="textBoxSizeClass[size]">
    <input
      v-model="model"
      class="text-box__input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
type TextBoxSize = 'sm' | 'md' | 'lg'
interface TextBoxProps {
  type: string
  name: string
  placeholder: string
  size?: TextBoxSize
}

withDefaults(defineProps<TextBoxProps>(), {
  size: 'lg'
})

const textBoxSizeClass: Record<TextBoxSize, string> = {
  sm: 'text-box__small',
  md: 'text-box__medium',
  lg: 'text-box__large'
}

const model = defineModel<string | number>()
</script>
<style lang="scss" scoped>
.text-box {
  background: $gray-200;
  border-radius: 8px;

  &__large {
    height: 56px;
  }

  &__input {
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
    border-radius: 8px;
    padding: 0 16px;
  }
}
</style>
