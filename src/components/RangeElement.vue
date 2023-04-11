<template>
    <div class="mb-2 mx-auto mt-4 rounded-lg w-3/4">
        <div class="mb-2">
            <FormKit type="text" label="Range Input Label" value="Label for your text Rangenput"
                placeholder="Rate your pain" v-model="formStore.label" />
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from '../stores/formStore.js'

const formStore = useFormStore()
</script>
