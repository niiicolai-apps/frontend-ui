<template>
    <div class="relative" :class="`
        ${bg_color}
        ${bar_height}
        ${bar_width}
    `">
        <div class="absolute left-0 top-0 bottom-0" :class="bar_color" :style="{ width }" />
        <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center" :class="color">
            <span class="font-bold" v-if="showPercent">{{ percent }}%</span>
            <slot />
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    progress: {
        type: Number,
        required: true
    },
    maxProgress: {
        type: Number,
        required: false,
        default: 100
    },
    showPercent: {
        type: Boolean,
        required: false,
        default: true
    },
    bg_color: {
        type: String,
        required: false,
        default: 'bg-secondary'
    },
    bar_color: {
        type: String,
        required: false,
        default: 'bg-primary'
    },
    color: {
        type: String,
        required: false,
        default: 'text-white'
    },
    bar_height: {
        type: String,
        required: false,
        default: 'h-5'
    },
    bar_width: {
        type: String,
        required: false,
        default: 'w-full'
    }
})

const percent = computed(() => {
    return parseInt((props.progress / props.maxProgress) * 100)
})

const width = computed(() => {
    return `${percent.value}%`
})
</script>