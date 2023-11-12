<template>
    <div class="relative" :class="textSizes[size]">
        <div class="flex items-center justify-between gap-3 py-3 rounded cursor-pointer z-1" 
        @click="toggle"
        :class="`
            ${bgg[type]}
            ${hover[type]}
            ${text[type]}
        `">
            <span class="px-4">
                <span v-if="multiple">
                    <span v-for="s in selected" :key="s">
                        {{ s.label }}
                        <span v-if="selected.length > 1 && s !== selected[selected.length - 1]">, </span>
                    </span>
                </span>
                <span v-else>{{ selected.label }}</span>
            </span>
            <span class="px-4">
                <svg xmlns="http://www.w3.org/2000/svg" :height="iconSizes[size]" :fill="fill[type]"
                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                </svg>
            </span>
        </div>

        <Transition :name="transition_name">
            <div v-if="isOpen" class="absolute left-0 right-0 rounded z-2 box-shadow-lg" :class="`
                ${bgg[type]}
                ${text[type]}
            `">
                <span v-for="option in options" :key="option.value" class="block py-2 px-4 cursor-pointer rounded"
                    :class="`
                        ${bgg[type]}
                        ${hover[type]}
                        ${text[type]}
                        ${isSelected(option) ? bggDark[type] : ''}
                    `"
                    @click="e => updateValue(option)">
                    {{ option.label }}
                </span>
            </div>
        </Transition>
    </div>
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
    type: {
        type: String,
        required: false,
        default: 'primary',
    },
    size: {
        type: String,
        required: false,
        default: 'md',
    },
    transition_name: {
        type: String,
        required: false,
        default: 'fade',
    },
})
const isOpen = ref(false)
const selected = ref(props.startOption)

const toggle = () => {
    isOpen.value = !isOpen.value
}

const isSelected = (option) => {
    if (props.multiple) {
        for (const s of selected.value) {
            if (s.value === option.value) {
                return true
            }
        }
        return false
    } else {
        return selected.value.value === option.value
    }
}

const updateValue = (option) => {
    if (props.multiple) {
        const exist = isSelected(option)
        if (exist) {
            if (selected.value.length > 1)
                selected.value = selected.value.filter(s => s.value !== option.value)
        } else {
            selected.value.push(option)
        }
    } else {
        selected.value = option
        toggle()
    }

    emits('update:value', selected.value)
}

const bgg = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-success',
    danger: 'bg-danger',
    warning: 'bg-warning',
    info: 'bg-info',
    light: 'bg-light',
    dark: 'bg-dark',
    white: 'bg-white',
    black: 'bg-black',
    transparent: 'bg-transparent',
}

const bggDark = {
    primary: 'bg-primary-dark',
    secondary: 'bg-secondary-dark',
    success: 'bg-success-dark',
    danger: 'bg-danger-dark',
    warning: 'bg-warning-dark',
    info: 'bg-info-dark',
    light: 'bg-light-dark',
    dark: 'bg-dark-dark',
    white: 'bg-white-dark',
    black: 'bg-black-dark',
    transparent: 'bg-transparent-dark',
}

const hover = {
    primary: 'bg-primary-hover',
    secondary: 'bg-secondary-hover',
    success: 'bg-success-hover',
    danger: 'bg-danger-hover',
    warning: 'bg-warning-hover',
    info: 'bg-info-hover',
    light: 'bg-light-hover',
    dark: 'bg-dark-hover',
    white: 'bg-white-hover',
    black: 'bg-black-hover',
    transparent: 'bg-transparent-hover',
}

const text = {
    primary: 'text-white',
    secondary: 'text-white',
    success: 'text-white',
    danger: 'text-white',
    warning: 'text-white',
    info: 'text-white',
    light: 'text-black',
    dark: 'text-white',
    white: 'text-black',
    black: 'text-white',
    transparent: 'text-black',
}

const textSizes = {
    '3xs': 'text-3xs',
    '2xs': 'text-2xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
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
    transparent: 'black',
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
</script>