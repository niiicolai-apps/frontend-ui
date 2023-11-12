<template>
    <button type="button" @click="updateValue(!checked)"
        class="border-none flex items-center justify-center rounded cursor-pointer" :class="`
            ${bgg[type]}
            ${btnSizes[size]}
        `">
        <Transition :name="transition_name">
            <svg xmlns="http://www.w3.org/2000/svg" v-if="checked" :width="iconSizes[size]" :fill="fill[type]"
                :height="iconSizes[size]"
                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
        </Transition>
    </button>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['update:value'])
const props = defineProps({
    startValue: {
        type: Boolean,
        required: false,
        default: false,
    },
    size: {
        type: String,
        required: false,
        default: 'md',
    },
    type: {
        type: String,
        required: false,
        default: 'primary',
    },
    transition_name: {
        type: String,
        required: false,
        default: 'fade',
    },
})
const checked = ref(props.startValue)
const updateValue = (value) => {
    checked.value = value
    emits('update:value', value)
}

const iconSizes = {
    '3xs': '0.5rem',
    '2xs': '0.75rem',
    xs: '0.875rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '1.75rem',
    '2xl': '2rem',
    '3xl': '2.25rem',
    '4xl': '2.5rem',
    '5xl': '3rem',
}

const btnSizes = {
    '3xs': 'h-4 w-5',
    '2xs': 'h-5 w-6',
    xs: 'h-6 w-7',
    sm: 'h-7 w-8',
    md: 'h-8 w-9',
    lg: 'h-9 w-10',
    xl: 'h-10 w-11',
    '2xl': 'h-11 w-12',
    '3xl': 'h-12 w-13',
    '4xl': 'h-14 w-15',
    '5xl': 'h-16 w-17',
}

const bgg = {
    default: '',
    primary: 'bg-primary bg-primary-hover',
    secondary: 'bg-secondary bg-secondary-hover',
    success: 'bg-success bg-success-hover',
    danger: 'bg-danger bg-danger-hover',
    warning: 'bg-warning bg-warning-hover',
    info: 'bg-info bg-info-hover',
    light: 'bg-light bg-light-hover',
    dark: 'bg-dark bg-dark-hover',
    white: 'bg-white bg-white-hover',
    black: 'bg-black bg-black-hover',
}

const fill = {
    default: '',
    primary: 'white',
    secondary: 'white',
    success: 'white',
    danger: 'white',
    warning: 'white',
    info: 'white',
    light: 'black',
    dark: 'white',
    white: 'black',
    black: 'white',
}
</script>