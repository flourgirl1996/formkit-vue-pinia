<template>
  <form @submit.prevent="formStore.addCheckBoxOption()">
    <div class="mb-2">
      <!--Checkbox label input-->
      <FormKit
        type="text"
        label="Label for Checkbox Group"
        value="Label for your text input"
        v-model="formStore.label"
      />
    </div>
    <!--checkbox option input w/ plus button-->
    <div class="my-2 flex">
      <div class="w-3/4">
        <FormKit
          type="text"
          v-model="formStore.newCheckOption"
          help="Add as many options as you like"
          @keyup.enter="formStore.addCheckBoxOption()"
        />
      </div>
      <div>
        <button
          type="button"
          class="text-3xl bg-white rounded-full px-2 ml-2"
          @click="formStore.addCheckBoxOption()"
        >
          +
        </button>
      </div>
    </div>
    <!--checkbox for loop-->
    <div
      v-for="(checkOption, index) in formStore.checkBoxOptions"
      :key="index"
    >
      <div class="mb-2">
        <FormKit
          type="checkbox"
          :id="'checkbox-${index}'"
          :options="[{ label: checkOption.label }]"
          :value="checkOption.label"
        />
      </div>
    </div>
    <!--add group to form-->
    <div
      class="flex justify-center"
      v-if="formStore.label  != ''"
    >
      <!--TODO make button work-->
      <FormKit
        type="button"
        @click="
          formStore.addCheckBoxGroup(
            formStore.newSection,
            formStore.label,
            formStore.newCheckOption
          )" >
        Add Checkbox Group to Form
      </FormKit>
    </div>
  </form>
</template>

<script setup>
  import { onMounted } from 'vue';
import { useFormStore } from '../stores/formStore.js'
  //import Plus from 'vue-material-design-icons.Plus.vue'

  const formStore = useFormStore()

  onMounted(() => {
    formStore.checkBoxOptions = []
    console.log('onMounted', formStore.checkBoxOptions)
  })

</script>
