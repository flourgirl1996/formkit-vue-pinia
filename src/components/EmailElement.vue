<template>
  <div class="mb-2 mx-auto mt-4 rounded-lg w-3/4">
    <div class="mb-2">
      <FormKit
        type="text"
        label="Email Input Label"
        value="Label for your text input"
        placeholder="Email label"
        v-model="formStore.label"
      />
    </div>
  </div>
</template>

<script setup>
  import { useFormStore } from '../stores/formStore.js'

  const formStore = useFormStore()
</script>
