<template>
  <div class="w-1/2 border-2 border-green-400 p-8">
    <div>
      <h1>{{ formStore.form_title }}</h1>
      <h3>{{ formStore.form_instructions }}</h3>
    </div>
    <div>
      <form>
        <div
          v-for="(section, sectionIndex) in formStore.mappedSections"
          :key="sectionIndex"
        >
          <h2 v-if="section.header">
            Section {{ sectionIndex + 1 }}: {{ section.header }}
          </h2>

          <div
            v-for="(field, fieldIndex) in section.fields"
            :key="`${sectionIndex}-${fieldIndex}`"
          >

            <div v-if="field.type === 'text'">
              <FormKit
                :label="field.label"
                type="text"
                :name="index"
                v-model="field.value"
              />
            </div>
            <!--      <textarea v-if="field.type === 'textarea'" v-model="field.value"></textarea> -->
            <div
              class="flex"
              v-if="field.type === 'checkbox'"
              v-for="(option, optionIndex) in field.options"
              :key="optionIndex"
            >
              <input
                type="checkbox"
                v-model="option.checked"
                class="checkbox"
              />
              <label class="label">{{ option.label }}</label>
            </div>
            <!--     <div v-if="field.type === 'radio'" v-for="(option, optionIndex) in field.options" :key="optionIndex">
            <label>{{ option.label }}</label>
            <input type="radio" v-model="field.value" :value="option.label">
          </div>
          <select v-if="field.type === 'select'" v-model="field.value">
            <option v-for="(option, optionIndex) in field.options" :key="optionIndex" :value="option.label">{{ option.label }}</option>
          </select> -->
          </div>
        </div>
      </form>
    </div>
  </div>
          <pre wrap>{{ value }}</pre>

</template>

<script setup>
  import { useFormStore } from '../stores/formStore.js'

  const formStore = useFormStore()
</script>
