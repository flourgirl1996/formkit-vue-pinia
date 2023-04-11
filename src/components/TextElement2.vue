<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <legend>Select options:</legend>
      <div v-for="(option, index) in selectedOptions" :key="index">
        <input
          type="checkbox"
          :id="option"
          :value="option"
          v-model="selectedOptions"
        />
        <label :for="option">{{ option }}</label>
      </div>
      <div>
        <label for="newOption">Add new option:</label>
        <input type="text" id="newOption" v-model="newOption" />
        <button type="button" @click="addOption">Add</button>
      </div>
      <button type="submit">Submit</button>
    </fieldset>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const selectedOptions = ref(['Option 1', 'Option 2', 'Option 3'])
const newOption = ref('')

function addOption() {
  if (newOption.value !== '') {
    selectedOptions.value.push(newOption.value)
    newOption.value = ''
  }
}

function handleSubmit() {
  console.log('Selected options:', selectedOptions.value)
}
</script>
