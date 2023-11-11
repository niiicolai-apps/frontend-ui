<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
</script>

<template>
    <UI.Grid columns="3">
      <CodeExample>
        <template #example>
          <UI.Title>A title</UI.Title>
        </template>

        <template #options>
          <li class="flex gap-1">
            None
          </li>
        </template>

        <template #code>
          &lt;UI.Title&gt;A title&lt;/UI.Title&gt;
        </template>
      </CodeExample>

      <CodeExample>
        <template #example>
          <UI.SubTitle>A subtitle</UI.SubTitle>
        </template>

        <template #options>
          <li class="flex gap-1">
            None
          </li>
        </template>

        <template #code>
          &lt;UI.SubTitle&gt;A subtitle&lt;/UI.SubTitle&gt;
        </template>
      </CodeExample>

      <CodeExample>
        <template #example>
          <UI.Paragraph>A paragraph</UI.Paragraph>
        </template>

        <template #options>
          <li class="flex gap-1">
            None
          </li>
        </template>

        <template #code>
          &lt;UI.Paragraph&gt;A paragraph&lt;/UI.Paragraph&gt;
        </template>
      </CodeExample>
    </UI.Grid>

    <UI.Grid columns="2">
      <CodeExample>
        <template #example>
          <UI.Paragraph class="bg-primary">bg-primary</UI.Paragraph>
          <UI.Paragraph class="bg-secondary">bg-secondary</UI.Paragraph>
          <UI.Paragraph class="bg-info">bg-info</UI.Paragraph>
          <UI.Paragraph class="bg-success">bg-success</UI.Paragraph>
          <UI.Paragraph class="bg-warning">bg-warning</UI.Paragraph>
          <UI.Paragraph class="bg-danger">bg-danger</UI.Paragraph>
        </template>

        <template #options>
          <li class="flex gap-1">
            None
          </li>
        </template>

        <template #code>
          &lt;UI.Paragraph class="bg-primary"&gt;bg-primary&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="bg-secondary"&gt;bg-secondary&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="bg-info"&gt;bg-info&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="bg-success"&gt;bg-success&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="bg-warning"&gt;bg-warning&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="bg-danger"&gt;bg-danger&lt;/UI.Paragraph&gt;
        </template>
      </CodeExample>

      <CodeExample>
        <template #example>
          <UI.Paragraph class="text-primary">text-primary</UI.Paragraph>
          <UI.Paragraph class="text-secondary">text-secondary</UI.Paragraph>
          <UI.Paragraph class="text-info">text-info</UI.Paragraph>
          <UI.Paragraph class="text-success">text-success</UI.Paragraph>
          <UI.Paragraph class="text-warning">text-warning</UI.Paragraph>
          <UI.Paragraph class="text-danger">text-danger</UI.Paragraph>
        </template>

        <template #options>
          <li class="flex gap-1">
            None
          </li>
        </template>

        <template #code>
          &lt;UI.Paragraph class="text-primary"&gt;text-primary&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="text-secondary"&gt;text-secondary&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="text-info"&gt;text-info&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="text-success"&gt;text-success&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="text-warning"&gt;text-warning&lt;/UI.Paragraph&gt;
          &lt;UI.Paragraph class="text-danger"&gt;text-danger&lt;/UI.Paragraph&gt;
        </template>
      </CodeExample>
    </UI.Grid>
</template>