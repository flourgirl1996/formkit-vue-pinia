<template>
    <TransitionRoot as="template" :show="modalStore.isOpen">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                       <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">

                            <div>

                                <div class="grid grid-cols-3 gap-4 mb-4 mx-auto">
                                    <!--TODO add handle click event-->
                                    <button v-for="button in modalStore.modalButtons" :key="button.id"
                                        @click="modalStore.displayFormElement(button.type, sectionIndex, inputIndex)"
                                        class=" bg-gray-300 p-2 !text-gray-900 h-20 w-42 rounded-lg shadow-lg hover:bg-indigo-100" :type=button.type>
                                        <component :is="button.icon" class="w-6 h-6 mx-auto block" />
                                        {{ button.label }}
                                    </button>
                                    
                                </div>
                                <div>
                                    <FormKit type="button" @click="modalStore.closeModal()" label="Close">

                                    </FormKit>
                                </div>
                            </div>

                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>

import { useModalStore } from '../stores/modalStore'


import { Dialog, DialogPanel,  TransitionChild, TransitionRoot } from '@headlessui/vue'

const modalStore = useModalStore()

const props = defineProps({
    sectionIndex: Number,
    inputIndex: Number
})
</script>


