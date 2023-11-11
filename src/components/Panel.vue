<template>
    <Transition name="fade">
        <Fixed top="0" left="0" right="0" bottom="0" class="bg-shadow-dark z-999" v-if="show && !hideBackground" />
    </Transition>
    <Transition :name="transition_name">
        <Fixed top="0" left="0" right="0" bottom="0" class="z-1000 flex items-center justify-center" v-if="show">
            <slot></slot>
        </Fixed>
    </Transition>
</template>

<script setup>
import Fixed from './Fixed.vue';
const props = defineProps({
    show: {
        type: Boolean,
        required: false,
        default: false
    },
    transition_name: {
        type: String,
        required: false,
        default: 'fade'
    },
    hideBackground: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>