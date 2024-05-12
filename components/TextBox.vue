<template>
  <div class="text-box" :class="textBoxSizeClass">
    <input
      v-model="model"
      class="text-box__input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
    />
    <span v-if="appendText" class="text-box__append-text">{{
      appendText
    }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
type TextBoxSize = 'sm' | 'md' | 'lg'
type HTMLInputElementType = 'text' | 'password' | 'number' | 'email'
interface TextBoxProps {
  type: HTMLInputElementType
  name: string
  placeholder: string
  appendText?: string
  size?: TextBoxSize
}

const props = withDefaults(defineProps<TextBoxProps>(), {
  size: 'lg',
  appendText: undefined
})

const textBoxSizeClasses: Record<TextBoxSize, string> = {
  sm: 'text-box--small',
  md: 'text-box--medium',
  lg: 'text-box--large'
}

const textBoxSizeClass = computed<string>(() => textBoxSizeClasses[props.size])

const model = defineModel<string | number>()
</script>
<style lang="scss" scoped>
.text-box {
  background: $gray-200;
  border-radius: 8px;
  display: flex;
  align-items: center;

  &--large {
    height: 56px;
    @include font-size(24px);
    font-weight: 600;

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

  &:has(&__append-text) {
    .text-box__input {
      padding-right: 0;
    }
  }

  &__append-text {
    padding: 0 16px;
    color: $gray-400;
  }
}
</style>
