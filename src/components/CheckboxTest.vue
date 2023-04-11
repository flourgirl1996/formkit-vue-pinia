<template>
    <div>
        <form @submit.prevent="handleSubmit" name="my-form">
            <div v-for="(checkbox, index) in checkboxes" :key="index">
                <label>
                    <input type="checkbox" :value="checkbox.label" :name="checkbox.label" v-model="checkbox.selected">
                </label>
                {{ checkbox.label }}
            </div>
            <div>
                <label for="new-checkbox">New Checkbox Label:</label>
                <input type="text" id="new-checkbox" name="newCheckboxLabel" v-model="newCheckboxLabel">
                <button type="button" @click="addCheckbox">Add Checkbox</button>
            </div>
            <button type="submit">Save</button>
            <button type="button" @click="resetForm">Reset</button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {},
            checkboxes: [],
            field: [],
            newCheckboxLabel: '',
            originalCheckboxes: [],
        };
    },

    methods: {
        addCheckbox() {
            if (this.newCheckboxLabel !== '') {
                this.checkboxes.push({ label: this.newCheckboxLabel, selected: false });
                this.newCheckboxLabel = '';
            }
        },
        handleSubmit() {
            console.log('handlesubmit')
            console.log(this.checkboxes)
            console.log('field', this.field)
            this.field.push(this.checkboxes)
            console.log('field after', this.field)
        },
        resetForm() {
            // Reset checkboxes to their original state
            this.checkboxes = JSON.parse(JSON.stringify(this.originalCheckboxes));

            // Clear the new checkbox label input
            this.newCheckboxLabel = '';
        },
    },
};
</script>
