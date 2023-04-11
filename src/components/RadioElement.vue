<template>
  <form @submit.prevent="formStore.addRadioOption()">
    <div class="mb-2">
      <!--radio label input-->
      <FormKit
        type="text"
        label="Label for Radio Group"
        value="Label for your text input"
        v-model="formStore.label"
      />
    </div>
    <!--radio option input w/ plus button-->
    <div class="my-1 flex">
      <div class="w-3/4">
        <FormKit
          type="text"
          v-model="formStore.newRadioOption"
          help="Add as many options as you like"
          @keyup.enter="formStore.addRadioOption()"
        />
      </div>
      <div>
        <button
          type="button"
          class="text-3xl bg-white rounded-full px-2 ml-2"
          @click="formStore.addRadioOption()"
        >
          +
        </button>
      </div>
    </div>
    <!--radio for loop-->
    <div
      v-for="(radioOption, index) in formStore.radioOptions"
      :key="index"
    >
      <div class="mb-2">
        <FormKit
          type="radio"
          :id="'radio-${index}'"
          :options="[{ label: radioOption.label, value: radioOption.label }]"
          v-model="formStore.selectedRadioOption"
        />
      </div>
    </div>
    <!--add group to form-->
    <div
      class="flex justify-center"
      v-if="formStore.label && formStore.newRadioOption != ''"
    >
      <!--TODO make button work-->
      <FormKit
        type="button"
        @click="
          formStore.addRadioGroup(
            formStore.newSection,
            formStore.label,
            formStore.radioOptions
          )
        "
      >
        Add Checkbox Group to Form
      </FormKit>
    </div>
  </form>
</template>

<script setup>
  import { useFormStore } from '../stores/formStore.js'
  //import Plus from 'vue-material-design-icons.Plus.vue'

  const formStore = useFormStore()
</script>
