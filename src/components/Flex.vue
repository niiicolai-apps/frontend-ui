<template>
    <div class="flex h-full"
        :class="`
            ${classDirection} 
            items-${items} 
            justify-${justify} 
            mb-${mb} 
            gap-${gap}`"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    items: {
        type: String,
        required: false,
        default: 'center'
    },
    justify: {
        type: String,
        required: false,
        default: 'center'
    },
    mb: {
        type: String,
        required: false,
        default: '0'
    },
    gap: {
        type: String,
        required: false,
        default: '5'
    },
    direction: {
        type: String,
        required: false,
        default: 'vertical'
    }
})
const classDirection = computed(() => {
    return props.direction === 'vertical' ? 'flex-col' : 'flex-row'
})
</script>
