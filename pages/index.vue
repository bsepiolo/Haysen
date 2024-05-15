<template>
  <div class="wrapper wrapper--small">
    <h1>{{ $t('COST_OF_PURCHASE_BY_COMPANY') }}</h1>

    <form @submit="onSubmit">
      <FormControl name="totalCost" label="Kwota brutto">
        <TextBox
          v-model="testValue"
          name="totalCost"
          type="number"
          placeholder="0"
          append-text="zł"
        />
      </FormControl>
      <button>Submit</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { ref } from 'vue'
import TextBox from '@/components/TextBox.vue'
import FormControl from '@/components/FormControl.vue'
const testValue = ref(10000)

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    totalCost: yup.number().required()
  })
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
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
