<template>
  <div>
    <Form />
  </div>
  <Modal />
</template>

<script setup>
import useFormStore from './stores/formStore.js'
import Form from './components/Form.vue'
import Modal from './components/Modal.vue'


const formStore = useFormStore()


</script>


