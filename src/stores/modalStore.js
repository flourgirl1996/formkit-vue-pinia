import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import TextBoxOutline from 'vue-material-design-icons/TextBoxOutline.vue'
import Phone from 'vue-material-design-icons/Phone.vue'
import TextBoxMultipleOutline from 'vue-material-design-icons/TextBoxMultipleOutline.vue'
import CheckboxBlankOutline from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import RadioBoxMarked from 'vue-material-design-icons/RadioBoxMarked.vue'
import EmailBox from 'vue-material-design-icons/EmailBox.vue'
import CalendarRange from 'vue-material-design-icons/CalendarRange.vue'
import ClockTimeTwoOutline from 'vue-material-design-icons/ClockTimeTwoOutline.vue'
import FolderArrowUpOutline from 'vue-material-design-icons/FolderArrowUpOutline.vue'
import ArrowLeftRight from 'vue-material-design-icons/ArrowLeftRight.vue'


export const useModalStore = defineStore('modalStore', {
  state: () => ({ 

    isOpen: false,
    buttonType: '',
    inputIndex: [],
       modalButtons: [
      {
        id: 1,
        type: 'text',
        label: 'Text Box',
        icon: markRaw(TextBoxOutline),
      },
      {
        id: 2,
        type: 'area',
        label: 'Text Area',
        icon: markRaw(TextBoxMultipleOutline),
      },
      {
        id: 3,
        type: 'checkbox',
        label: 'Check Box',
        icon: markRaw(CheckboxBlankOutline),
      },
      {
        id: 4,
        type: 'radio',
        label: 'Radio Group',
        icon: markRaw(RadioBoxMarked),
      },
      {
        id: 5,
        type: 'phone',
        label: 'Phone Field',
        icon: markRaw(Phone),
      },
      {
        id: 6,
        type: 'email',
        label: 'Email Field',
        icon: markRaw(EmailBox),
      },
      {
        id: 7,
        type: 'date',
        label: 'Date',
        icon: markRaw(CalendarRange),
      },
      {
        id: 8,
        type: 'time',
        label: 'Time',
        icon: markRaw(ClockTimeTwoOutline),
      },
      {
        id: 9,
        type: 'file',
        label: 'File Upload',
        icon: markRaw(FolderArrowUpOutline),
      },
      {
        id: 10,
        type: 'range',
        label: 'Range',
        icon: markRaw(ArrowLeftRight),
      }
    ], // end of modalButtons
    


  }),// end of state 

  actions: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = !this.isOpen
    },
            // display form from modal
    displayFormElement(buttonType) {
      console.log(`displayFormElement Button with type ${buttonType} clicked!`);
      console.log(buttonType)
      this.isOpen = false
      this.buttonType = buttonType
    },

  } // end of actions

}) // end of store
export default useModalStore