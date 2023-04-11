<template>
    <div class="w-1/2 bg-indigo-200 min-h-screen rounded-lg p-8">
        <div>

            <FormKit type="text" label="Form Title" placeholder="My Form Title (required)" v-model="formStore.form_title"
                validation="required" />
        </div>
        <div>
            <FormKit type="text" label="Form Instructions" placeholder="What the form is about (optional)"
                v-model="formStore.form_instructions" />
        </div>
        <div v-for="(section, sectionIndex) in formStore.sections" :key="sectionIndex">
            <div class="flex items-end">
                <div class="w-full">
                    <FormKit type="text" v-model="section.name" label="Section Header" />
                </div>
                <div>
                    <button @click="formStore.deleteSection(sectionIndex)">
                        <TrashCanOutline />
                    </button>

                </div>

            </div>
            <h3>Section {{ sectionIndex + 1 }}: {{ section.name }}</h3>
            <div v-if="section && section.inputs">
        <div class="flex justify-center">
                        <FormKit type="button" label="Add New Form Element" @click="modalStore.openModal()" />
                    </div>

          <div v-for="(input, inputIndex) in section.inputs" :key="inputIndex">
            </div>          
                <div>
                    <div v-if="modalStore.buttonType === 'text'">
                        <TextElement :section-index="sectionIndex" :input="inputIndex" />
                    </div>
                <!--    <div v-if="modalStore.buttonType === 'area'">
                        <TextAreaElement :section-index="sectionIndex" :input="inputIndex" />
                    </div>
                         <div v-if="modalStore.buttonType === 'phone'">
            <PhoneElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'checkbox'">
            <CheckboxElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'radio'">
            <RadioElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'email'">
            <EmailElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'date'">
            <DateElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'time'">
            <TimeElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'file'">
            <FileElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'range'">
            <RangeElement :section="formStore.newSection" />
          </div>
          <div v-if="modalStore.buttonType === 'signature'">
            <SignatureElement :section="formStore.newSection" />
          </div> -->
                </div>
                <!--      <div v-for="(input, inputIndex) in section.inputs" :key="inputIndex" class="flex items-end">
                    <div class="w-full">
                        <FormKit type="text" v-model="input.value" label="input.label"
                            :id="'input-' + input.sectionIndex + '-' + input.inputIndex" />
                    </div>
                    <div class="">
                        <button @click="formStore.removeInput(sectionIndex, inputIndex)" >
                            <TrashCanOutline />
                        </button>

                    </div>
                </div> -->
            </div>

            <div>
                <button @click="modalStore.openModal(sectionIndex)">Add Input</button>
            </div>
        </div>
        <div>
            <button @click="formStore.addSection(sectionIndex)">Add Section</button>
        </div>
        <div>
            <button @click="formStore.saveForm(sectionIndex)">Save Form</button>
        </div>
        <button @click="formStore.resetForm()">reset</button>
    </div>
</template>

<script setup>

import { useFormStore } from '../stores/formStore.js';
import { useModalStore } from '../stores/modalStore.js'
import TextElement from '../components/TextElement.vue'
import TextAreaElement from '../components/TextAreaElement.vue'
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'


const formStore = useFormStore()
const modalStore = useModalStore()


</script>
