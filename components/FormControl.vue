<template>
  <div class="form-control">
    <label>{{ label }}</label>
    <slot />
    <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed, getCurrentInstance, watch } from 'vue'
import { useField } from 'vee-validate'
const props = defineProps<{
  name: string
  label: string
}>()

const instance = getCurrentInstance()

const fieldValue = computed(() => {
  const slot = instance?.slots.default?.()[0]
  return slot?.props?.modelValue || ''
})

watch(fieldValue, (current) => {
  setValue(current)
})
// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { setValue, errorMessage } = useField(() => props.name)
</script>
