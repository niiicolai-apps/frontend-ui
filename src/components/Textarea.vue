<template>
    <textarea
        class="block w-full px-4 py-2 border-1 border-secondary rounded text-md"
        :placeholder="placeholder"
        :value="v"
        @input="e => updateValue(e.target.value)"
    ></textarea>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emits = defineEmits(['update:value']);
const props = defineProps({
    startValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
})
const v = ref(props.startValue);
const updateValue = (value) => {
    v.value = value
    emits('update:value', value)
}
</script>