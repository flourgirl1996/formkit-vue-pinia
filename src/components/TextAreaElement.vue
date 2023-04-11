<template>
  <div class="mb-2 mx-auto mt-4 rounded-lg w-3/4">
    <div class="mb-2">
      <FormKit type="text" label="Textarea Input Label" value="" placeholder="label for your new textarea"
        v-model="formStore.label" :section-index="sectionIndex" :input-index="props.inputIndex" />
    </div>
    <div>
      <button @click="formStore.removeInput(sectionIndex, props.inputIndex)">
        <TrashCanOutline />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '../stores/formStore.js'
import { defineProps } from 'vue'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'

const props = defineProps({
  sectionIndex: Number,
  inputIndex: Number
})

const formStore = useFormStore()
</script>
