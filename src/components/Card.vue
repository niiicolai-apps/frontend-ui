<template>
    <div :class="`
        ${bg[type]}
        ${text[type]}
        ${border[type]}
        ${classNames}
        `">
        <div :class="headerClassNames">
            <slot name="header" />
        </div>

        <div :class="bodyClassNames">
            <slot name="body" />
        </div>

        <div :class="footerClassNames">
            <slot name="footer" />
        </div>
    </div>    
</template>

<script setup>
defineProps({
    type: {
        type: String,
        required: false,
        default: 'default'
    },
    classNames: {
        type: String,
        required: false,
        default: 'border-1 border-solid rounded p-3 box-shadow-lg'
    },
    headerClassNames: {
        type: String,
        required: false,
        default: 'mb-3 font-bold text-lg border-b-1 border-solid pb-3 flex items-center justify-between gap-3'
    },
    bodyClassNames: {
        type: String,
        required: false,
        default: 'mb-5'
    },
    footerClassNames: {
        type: String,
        required: false,
        default: 'text-sm flex items-center justify-between gap-3'
    }
})

const bg = {
    default: '',
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
}

const text = {
    default: '',
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
}

const border = {
    default: '',
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    danger: 'border-danger',
    warning: 'border-warning',
    info: 'border-info',
    light: 'border-light',
    dark: 'border-dark',
    white: 'border-white',
    black: 'border-black',
}
</script>