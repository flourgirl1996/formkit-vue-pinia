<template>
  <div class="w-1/2 bg-indigo-200 min-h-screen rounded-lg p-8">
    <div >
      <FormKit type="text" label="Form Title" placeholder="My Form Title (required)" v-model="formStore.form_title"
        validation="required" />
    </div>
    <div>
      <FormKit type="text" label="Form Instructions" placeholder="What the form is about (optional)"
        v-model="formStore.form_instructions" />
    </div>
    <div class="mt-4 flex gap-4 ">


      <FormKit type="button" label="Create New Secion" @click="formStore.createNewSection()" />

    </div>
    <div class="mt-4 bg-white p-4 border-2 border-gray-300 rounded-lg" v-if="formStore.sections.length">
      <div v-show="formStore.showHeaderInput">
        <div v-for="(section, index) in formStore.sections" :key="index">
          <h2>Section {{ index + 1 }}</h2>

          <div>
            <FormKit type="text" v-model="section.header" label="Section Header" />
            <FormKit type="button" label="Delete Section" @click="formStore.deleteSection(section, index)" :config="{
              classes: {
                input: 'bg-red-600 hover:bg-red-500 text-white text-sm font-normal py-2 px-3 rounded'
              }
            }" />

          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <FormKit type="button" label="Add New Form Element" @click="formStore.openModal()" />
      </div>
      <div></div>
    </div>

    <div>
      <div v-if="formStore.buttonType === 'text'">
        <TextElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'area'">
        <TextAreaElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'phone'">
        <PhoneElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'checkbox'">
        <CheckboxElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'radio'">
        <RadioElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'email'">
        <EmailElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'date'">
        <DateElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'time'">
        <TimeElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'file'">
        <FileElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'range'">
        <RangeElement :section="formStore.newSection" />
      </div>
      <div v-if="formStore.buttonType === 'signature'">
        <SignatureElement :section="formStore.newSection" />
      </div>
    </div>
    <div>
                <FormKit
              type="button"
              label="Add to Form"
              @click="
                formStore.addTextField(
                  formStore.newSection,
                  formStore.label,
                  formStore.buttonType
                  
                )
              "
            >
            </FormKit> 
  <!--     <FormKit type="button" label="Add to Form" @click="
        formStore.addFieldToSection(
          formStore.currentSection,
          formStore.label,
          formStore.buttonType
        ); 
  
                  " > 
      </FormKit> -->
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '../stores/formStore.js'
import TextElement from './TextElement2.vue.js'
import TextAreaElement from './TextAreaElement.vue'
import CheckboxElement from './CheckboxElement.vue'
import RadioElement from './RadioElement.vue'
import PhoneElement from './PhoneElement.vue'
import EmailElement from './EmailElement.vue'
import DateElement from './DateElement.vue'
import TimeElement from './TimeElement.vue'
import FileElement from './FileElement.vue'
import RangeElement from './RangeElement.vue'
import SignatureElement from './SignatureElement.vue'
import { onMounted, watch } from 'vue'


const formStore = useFormStore()

onMounted(() => {
console.log('onMounted', formStore.checkBoxOptions)
}) 

watch(() => [formStore.sections, formStore.fields], ([newSections, newFields]) => {
  console.log('Sections or fields changed:', newSections, newFields)
  // Perform any necessary logic here based on the updated sections and fields arrays
  formStore.mappedSections
})
</script>
