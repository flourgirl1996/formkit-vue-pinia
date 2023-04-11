import { defineStore } from 'pinia'

export const useFormStore = defineStore('formStore', {
  state: () => ({ 

    // elements state
    sections: [],
    inputs: [],
    submitted: false,
    form_title: 'Title goes Here',
    form_instructions: '',
    


  }),// end of state 

  actions: {
    addSection() {
        this.sections.push({ name:'', inputs: [] })
    },
    deleteSection(sectionIndex) {
      this.sections.splice(sectionIndex, 1)
    },
    addInput (sectionIndex) {
        this.sections[sectionIndex].inputs.push({ label: '', type: '', required: false, options: []})
      console.log('section', this.sections)
    },
    removeInput(sectionIndex, inputIndex) {
      console.log(' inremoveInput ')
      console.log('sectionIndex' , this.sections[sectionIndex].inputs)
      inputIndex = this.sections[sectionIndex].inputs
        this.sections[sectionIndex].inputs.splice(inputIndex, 1)        
    },
    saveForm(sectionIndex) {
        console.log(this.sections)
    },
    resetForm(sectionIndex, inputIndex) {
        alert('This will clear all data sections and imports.  Do you want to proceed?')
          this.sections.length = 0
    },

  } // end of actions

}) // end of store
export default useFormStore