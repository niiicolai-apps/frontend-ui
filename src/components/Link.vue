<template>
    <a
        v-if="external"
        :href="to"
        :target="target"
        class="cursor-pointer"
        :class="`link ${text[type]}`">
        <slot></slot>
    </a>

    <router-link
        v-else
        :to="to"
        :target="target"
        class="cursor-pointer"
        :class="`link ${text[type]}`">
        <slot></slot>
    </router-link>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'primary'
    },
    to: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: false,
        default: '_self',
    },
    external: {
        type: Boolean,
        default: false,
    },
});

const text = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    danger: 'text-danger',
    warning: 'text-warning',
    info: 'text-info',
    light: 'text-light',
    dark: 'text-dark',
    white: 'text-white',
    black: 'text-black',
    transparent: 'text-transparent',
}
</script>

<style scoped>
a.link.text-primary:hover { color: var(--primary-hover); }
a.link.text-secondary:hover { color: var(--secondary-hover); }
a.link.text-success:hover { color: var(--success-hover); }
a.link.text-danger:hover { color: var(--danger-hover); }
a.link.text-warning:hover { color: var(--warning-hover); }
a.link.text-info:hover { color: var(--info-hover); }
a.link.text-light:hover { color: var(--light-hover); }
a.link.text-dark:hover { color: var(--dark-hover); }
a.link.text-white:hover { color: var(--white-hover); }
a.link.text-black:hover { color: var(--black-hover); }
a.link.text-transparent:hover { color: var(--transparent-hover); }
</style>