import { defineStore } from 'pinia'
import { markRaw, watch } from 'vue'
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

export const useFormStore = defineStore('formStore', {
  state: () => ({
    helpText: false,
    isOpen: false,
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
    // Element state
    form_title: 'My Form Title Here',
    form_instructions: '',
    sections: [],
    newSection: [],
    fields: [],
    inputs: [],
    label: '',
    newCheckOption: [],
    checkBoxOptions: [],
    radioOptions: [],
    newRadioOption: [],
    selectedRadioOption: '',
    buttonType: '',

  }), //end of state
  getters: {
//     mappedSections(state) {
//       return state.sections.map((section) => ({
//         header: section.header,
//         fields: section.fields.map((field) => ({
//           label: field.label,
//           type: field.type,
//           value: field.value,
//           options: field.options,
//         }))
//       }))
//     } 
  
  
 },

  actions: {
    //modal actions
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = !this.isOpen
    },
    //checkbox actions
    addCheckBoxOption() {
      console.log('in addCheckBoxOption')
      const label = this.newCheckOption.trim()
      if (label !== '') {
        this.checkBoxOptions.push({
          index: this.checkBoxOptions.length + 1,
          label,
        })
        this.newCheckOption = ''
      }
    },
        addCheckBoxGroup() {
      console.log('in addCheckBoxGroup')
      console.log('Label:', this.label)
      console.log('Options:', this.checkBoxOptions)
    },
    addRadioGroup() {
      console.log('in addRadioGroup')
      console.log('Label:', this.label)
      console.log('Options:', this.checkBoxOptions)
    },
    //radio actions
    addRadioOption() {
      console.log('in addRadioOption')
      const label = this.newRadioOption.trim()
      if (label !== '') {
        this.radioOptions.push({
          index: this.radioOptions.length + 1,
          label,
        })
        this.radioOption = ''
      }
    },
    addRadioGroup() {
      console.log('in addRadioGroup')
      console.log('Label:', this.label)
      console.log('Options:', this.radioOptions)
    },
    // display form from modal
    displayFormElement(buttonType) {
      console.log(`displayFormElement Button with type ${buttonType} clicked!`);
      console.log(buttonType)
      this.isOpen = false
      this.buttonType = buttonType

    },
    createNewSection() {
      console.log('createNewSection',  this.sections)
      const newSection = { header: '', fields: [] };
      this.sections.push(newSection);
      this.currentSection = newSection;
      this.showHeaderInput = true;
    },
addSection(index) {
            this.sections.push({ name: '', inputs: [] });
        },
    deleteSection(section, index) {
      this.sections.splice(index, 1)
    },
        addFieldToSection(field) {
      this.sections[this.newSection].fields.push(field)
    },

    addTextField111(section, label, type) {
      console.log(section, label, type, this.checkBoxOptions)
      const field = { section, label, type, options: [] }
      if (type === 'checkbox') {
        field.options = this.checkBoxOptions
      }
      section?.fields.push(field)

      this.buttonType = ''
    },
     addTextField(sectionIndex) {
            this.sections[sectionIndex].inputs.push({ label: '', value: '' });
    },
        addInput(sectionIndex) {
      this.sections[sectionIndex].inputs.push({ label: '', value: '' });
    },
      //  addTextField(newSection, label, value) {
      // console.log('in addTextField', this.buttonType )
      //   const fields = this.fields
      // this.sections[sectionIndex].fields.push({
      //   fieldIndex: this.fields.length,
      //   type: 'text',
      //   label: this.label,
      //   value: '',
      //   options: []
      //    })
      //    console.log('fields', this.fields)
      //    console.log('sections', this.sections)
      // this.buttonType = 'text'
      // this.label = ''
      // console.log(this.buttonType)
      // console.log('inside AddTextField', this.sections)
      // console.log('inside AddTextField fields', this.fields)

      // },
    

    //form help
    toggleHelp() {
      this.helpText = !this.helpText
    }
    
  }, //end of actions
      setup() {
      this.$watch(
        () => [this.sections, this.fields],
        () => {
          console.log('Sections or fields changed:', this.sections, this.fields)
          // Perform any necessary logic here based on the updated sections or fields arrays
          this.mappedSections = this.mapSections(this.sections, this.fields)
        }
      )
    }
}) //end of formStore


export default useFormStore