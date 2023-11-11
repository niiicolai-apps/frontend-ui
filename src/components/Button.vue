<template>
    <button 
        v-if="!link"
        class="border-none rounded px-3 py-2 cursor-pointer"
        :class="`btn ${bg[type]} ${text[type]}`">
        <slot></slot>
    </button>

    <router-link
        v-else
        :link="to"
        :target="target"
        class="border-none rounded px-3 py-2 cursor-pointer"
        :class="`btn ${bg[type]} ${text[type]}`">
        <slot></slot>
    </router-link>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    link: {
        type: String,
        required: false,
        default: null,
    },
    target: {
        type: String,
        required: false,
        default: '_self',
    },
})

const bg = {
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
    transparent: 'bg-transparent bg-transparent-hover',
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
</script>

<style scoped>
button.btn {
    transition: all 0.2s ease-in-out;
}

button.btn:hover {
    transform: scale(1.05);
}

button.btn:focus {
    outline: none;
}

button.btn:active {
    transform: scale(0.95);
}

button.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

</style>