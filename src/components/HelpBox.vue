<template>
    <button @hover="formStore.displayHelp()">
        <HelpBoxOutline fillColor="#FFFFFF" :size="30"/>
    </button>
</template>

<script setup>
import { useFormStore } from '../stores/formStore.js'
import HelpBoxOutline from 'vue-material-design-icons/HelpBoxOutline.vue'


const formStore = useFormStore()

</script>