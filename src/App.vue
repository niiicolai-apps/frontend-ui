<script setup>
import UI from '../index.js';
import TextExamples from './examples/TextExamples.vue';
import DisplayExamples from './examples/DisplayExamples.vue';
import UtilitiesExamples from './examples/UtilitiesExamples.vue';
import TransitionExamples from './examples/TransitionExamples.vue';
import ButtonExamples from './examples/ButtonExamples.vue';
import LinkExamples from './examples/LinkExamples.vue';

import { ref } from 'vue';
const page = ref('text');
const isPage = (pageName) => page.value === pageName;
</script>

<template>
  <UI.Container class="mt-3">
    <UI.Flex direction="horizontal" class="mb-5">
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('text') }" @click="page = 'text'">Text</UI.Button>
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('display') }" @click="page = 'display'">Display</UI.Button>
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('utilities') }" @click="page = 'utilities'">Utilities</UI.Button>
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('transitions') }" @click="page = 'transitions'">Transitions</UI.Button>
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('buttons') }" @click="page = 'buttons'">Buttons</UI.Button>
      <UI.Button type="primary" :class="{ 'bg-primary-dark': isPage('links') }" @click="page = 'links'">Links</UI.Button>
    </UI.Flex>

    <TextExamples v-if="isPage('text')" />
    <DisplayExamples v-if="isPage('display')" />
    <UtilitiesExamples v-if="isPage('utilities')" />
    
    <TransitionExamples v-if="isPage('transitions')" />
    <ButtonExamples v-if="isPage('buttons')" />
    <LinkExamples v-if="isPage('links')" />
  </UI.Container>
</template>
