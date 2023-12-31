<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
import { ref } from 'vue';

const show = ref(false);
</script>

<template>
    <CodeExample>
      <template #example>
        <UI.ProgressBar :progress="32.333" :max-progress="100" class="mb-3" />
        
        <UI.ProgressBar 
          :progress="30" 
          :max-progress="100" 
          :showPercent="false"
        >
          <UI.Paragraph class="font-bold">
            Level 30
          </UI.Paragraph>
        </UI.ProgressBar>
      </template>

      <template #options>
        <li class="flex gap-1">
          <span class="font-bold">progress:</span>
          <span>0 - 100</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">max-progress:</span>
          <span>0 - 100</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">bg_color:</span>
          <span>bg-secondary | bg-primary | bg-info | bg-success | bg-warning | bg-danger</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">bar_color:</span>
          <span>bg-secondary | bg-primary | bg-info | bg-success | bg-warning | bg-danger</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">color:</span>
          <span>text-secondary | text-primary | text-info | text-success | text-warning | text-danger</span>
        </li>
      </template>

      <template #code>
        &lt;UI.ProgressBar :progress="30" :max-progress="100" /&gt;
      </template>
    </CodeExample>

    <CodeExample>
      <template #example>
        <UI.Card>
            <template #header>
                <span>Header</span>
                <span>Header</span>
            </template>
            <template #body>
                Body
            </template>
            <template #footer>
                <span>Footer</span>
                <span>Footer</span>
            </template>
        </UI.Card>
      </template>

      <template #options>
        <li class="flex gap-1">
          <span class="font-bold">type:</span>
          <span>default | primary | secondary | info | success | warning | danger | light | dark | white | black | transparent</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">classNames:</span>
          <span>any</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">headerClassNames:</span>
          <span>any</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">bodyClassNames:</span>
          <span>any</span>
        </li>
        <li class="flex gap-1">
          <span class="font-bold">footerClassNames:</span>
          <span>any</span>
        </li>
      </template>

      <template #code>
        &lt;UI.Card&gt;
            &lt;template #header&gt;
                &lt;span&gt;Header&lt;/span&gt;
                &lt;span&gt;Header&lt;/span&gt;
            &lt;/template&gt;
            &lt;template #body&gt;
                Body
            &lt;/template&gt;
            &lt;template #footer&gt;
                &lt;span&gt;Footer&lt;/span&gt;
                &lt;span&gt;Footer&lt;/span&gt;
            &lt;/template&gt;
        &lt;/UI.Card&gt;
      </template>
    </CodeExample>

    <CodeExample>
      <template #example>
        <UI.Button type="primary" @click="show = !show">
            Show Panel
        </UI.Button>

        <UI.Panel transition_name="slide-left" :show="show">
            <div class="bg-secondary rounded p-5">
                <UI.Title class="mb-5">Header</UI.Title>
                <UI.Paragraph class="mb-5">Body</UI.Paragraph>
                <UI.Button type="primary" @click="show = !show">
                    Hide Panel
                </UI.Button>
            </div>
        </UI.Panel>
      </template>

      <template #options>
        <li class="flex gap-1">
            <span class="font-bold">transition_name:</span>
            <span>fade | slide-left | slide-right | slide-up | slide-down</span>
        </li>
        <li class="flex gap-1">
            <span class="font-bold">show:</span>
            <span>true | false</span>
        </li>
        <li class="flex gap-1">
            <span class="font-bold">hideBackground:</span>
            <span>true | false</span>
        </li>
      </template>

      <template #code>
        &lt;UI.Panel transition_name="slide-left" :show="true"&gt;
            Panel
        &lt;/UI.Panel&gt;
      </template>
    </CodeExample>
</template>