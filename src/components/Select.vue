<template>
    <select 
        class="block w-full border-1 border-secondary px-4 py-2 text-md rounded"
        @change="e => updateValue(e)" 
        :multiple="multiple">
        <option
            v-for="option in props.options"
            :key="option.value"
            :value="option.value"
            :selected="isStartOption(option)"
        >
            {{ option.label }}
        </option>
    </select>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['update:value'])
const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    startOption: {
        required: false,
        default: null,
    },
    multiple: {
        type: Boolean,
        required: false,
        default: false,
    },
})
const selected = ref(props.startOption)
const isStartOption = (option) => {
    if (props.multiple) {
        return selected.value.includes(option.value)
    } else {
        return selected.value === option.value
    }
}
const updateValue = (e) => {
    if (props.multiple) {
        selected.value = [...e.target.selectedOptions].map((option) => option.value)
    } else {
        selected.value = e.target.value
    }
    
    emits('update:value', selected.value)
}
</script>