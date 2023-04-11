<template>
  <div class="mb-2 mx-auto mt-4 rounded-lg w-full">
    <div class="mb-2 flex">
      <div class="mr-2">
        <button @click="formStore.toggleHelp" >
          <HelpBoxOutline
            fillColor="#oooooo"
            :size="30"
          />
        </button>
              <div class="bg-gray-200 p-6" v-if="formStore.helpText" >
              <p >Some help text here</p>

          </div>
      </div>
      <div class="w-full">
        <FormKit
          type="text"
          label="Date Input Label"
          value="Label for your text input"
          placeholder="DOB / Last Dr Visit, etc"
          v-model="formStore.label"
        />
      </div >

    </div>
  </div>
</template>

<script setup>
  import { useFormStore } from '../stores/formStore.js'
  import HelpBoxOutline from 'vue-material-design-icons/HelpBoxOutline.vue'

  const formStore = useFormStore()
</script>
