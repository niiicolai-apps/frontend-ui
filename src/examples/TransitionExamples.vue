<script setup>
import UI from '../../index.js';
import TransitionExample from '../internal/TransitionExample.vue';
</script>

<template>
    <UI.Grid columns="3" class="border-b-1 border-solid border-secondary pb-5 mb-5">
      <TransitionExample name="fade" />
      <TransitionExample name="slide-left" />
      <TransitionExample name="slide-right" />
      <TransitionExample name="slide-up" />
      <TransitionExample name="slide-down" />
      <TransitionExample name="bounce" />
      <TransitionExample name="flip" />
      <TransitionExample name="flip-y" />
      <TransitionExample name="flip-x" />
      <TransitionExample name="skew-x" />
      <TransitionExample name="skew-y" />
      <TransitionExample name="scale" />
      <TransitionExample name="scale-x" />
      <TransitionExample name="scale-y" />
    </UI.Grid>
</template>