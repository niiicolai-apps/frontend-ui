<template>
    <div 
        class="fixed"
        :class="`
            top-${top}
            bottom-${bottom}
            left-${left}
            right-${right}
        `"
    >
        <slot />
    </div>
</template>

<script setup>
defineProps({
    top: {
        type: String,
        required: false,
        default: '0'
    },
    bottom: {
        type: String,
        required: false,
        default: '0'
    },
    left: {
        type: String,
        required: false,
        default: '0'
    },
    right: {
        type: String,
        required: false,
        default: '0'
    }
})
</script>
