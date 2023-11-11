<template>
    <div class="grid h-full"
        :class="`
            grid-rows-${rows}
            grid-cols-${columns} 
            mb-${vertical_space} 
            gap-${gap}`"
    >
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    rows: {
        type: String,
        required: false,
        default: '1'
    },
    columns: {
        type: String,
        required: false,
        default: '1'
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
})
</script>
