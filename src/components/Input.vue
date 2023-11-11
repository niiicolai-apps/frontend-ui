<template>
    <input
        class="block w-full border-1 border-secondary rounded px-4 py-2 text-md rounded"
        :type="type"
        :placeholder="placeholder"
        :value="v"
        @input="e => updateValue(e.target.value)"
    />
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['update:value'])
const props = defineProps({
    startValue: {
        required: false,
        default: null,
    },
    placeholder: {
        type: String,
        required: false,
        default: null,
    },
    type: {
        type: String,
        required: false,
        default: 'text',
    },
})
const v = ref(props.startValue)
const updateValue = (value) => {
    v.value = value
    emits('update:value', value)
}
</script>