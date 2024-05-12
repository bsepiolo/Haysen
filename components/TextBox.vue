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
type HTMLInputElementType = 'text' | 'password' | 'number' | 'email'
interface TextBoxProps {
  type: HTMLInputElementType
  name: string
  placeholder: string
  size?: TextBoxSize
}

withDefaults(defineProps<TextBoxProps>(), {
  size: 'lg'
})

const textBoxSizeClass: Record<TextBoxSize, string> = {
  sm: 'text-box--small',
  md: 'text-box--medium',
  lg: 'text-box--large'
}

const model = defineModel<string | number>()
</script>
<style lang="scss" scoped>
.text-box {
  background: $gray-200;
  border-radius: 8px;

  &--large {
    height: 56px;

    .text-box__input {
      @include font-size(24px);
      font-weight: 600;
    }
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
