<template >
    <div class="mb-2 p-4 bg-gray-50 mt-4 rounded-lg">
        <div class="mb-2 flex items-end">
            <div class="w-full">
                <FormKit 
                label="Label for Text Input" 
                type="text" name="formStore.label" 
                v-model="formStore.label"
                 :name= 'formStore.label' />
            </div>
            <div class="flex">
                <div>
                    <button @click="formStore.addInput(sectionIndex)">
                        <PlusCircleOutline />
                    </button>
                </div>
                <div>
                    <button @click="formStore.removeInput(sectionIndex, inputIndex)">
                        <TrashCanOutline />
                    </button>
                </div>

            </div>
        </div>
        <div class="flex items-center mb-2">
        </div>
        <button @click="formStore.addInput(sectionIndex)">Add to Form
        </button>
    </div>
</template>

<script setup>

import { useFormStore } from '../stores/formStore';
import TrashCanOutline from 'vue-material-design-icons/TrashCanOutline.vue'
import PlusCircleOutline from 'vue-material-design-icons/PlusCircleOutline.vue'

import { useModalStore } from '../stores/modalStore.js'


const formStore = useFormStore()
const modalStore = useModalStore()

const props = defineProps({
    sectionIndex: Number,
    inputIndex: Number
})




</script>