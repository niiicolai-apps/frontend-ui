<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
</script>

<template>
  <CodeExample>
    <template #example>
      <div>
        Fixed
      </div>
    </template>

    <template #options>
      <li class="flex gap-1">
        <span class="font-bold">top:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">right:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">bottom:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">left:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</span>
      </li>
    </template>

    <template #code>
      &lt;UI.Fixed&gt;Fixed&lt;/UI.Fixed&gt;
    </template>
  </CodeExample>

  <CodeExample>
    <template #example>
      <UI.Flex direction="horizontal" justify="between">
        <span>Flex</span>
        <span>Flex</span>
        <span>Flex</span>
      </UI.Flex>
    </template>

    <template #options>
      <li class="flex gap-1">
        <span class="font-bold">direction:</span>
        <span>vertical | hortizontal</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">mb:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">gap:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">justify:</span>
        <span>start | center | between | evenly | around | end</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">items:</span>
        <span>start | center | end | stretch</span>
      </li>
    </template>

    <template #code>
      &lt;UI.Flex direction="horizontal" justify="between"&gt;
      &lt;span&gt;Flex&lt;/span&gt;
      &lt;span&gt;Flex&lt;/span&gt;
      &lt;span&gt;Flex&lt;/span&gt;
      &lt;/UI.Flex&gt;
    </template>
  </CodeExample>

  <CodeExample>
    <template #example>
      <UI.Grid rows="1" columns="3" gap="2" mb="2">
        <span>Grid</span>
        <span>Grid</span>
        <span>Grid</span>
      </UI.Grid>
    </template>

    <template #options>
      <li class="flex gap-1">
        <span class="font-bold">rows:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">columns:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">gap:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
      <li class="flex gap-1">
        <span class="font-bold">mb:</span>
        <span>0 | 1 | 2 | 3 | 4 | 5</span>
      </li>
    </template>

    <template #code>
      &lt;UI.Grid rows="1" columns="3" gap="2" mb="2"&gt;
      &lt;span&gt;Grid&lt;/span&gt;
      &lt;span&gt;Grid&lt;/span&gt;
      &lt;span&gt;Grid&lt;/span&gt;
      &lt;/UI.Grid&gt;
    </template>
  </CodeExample>
</template>