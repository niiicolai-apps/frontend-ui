<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
</script>

<template>
    <CodeExample>
        <template #example>
            <UI.Grid columns="3">
                <UI.Button type="primary">primary</UI.Button>
                <UI.Button type="secondary">secondary</UI.Button>
                <UI.Button type="info">info</UI.Button>
                <UI.Button type="success">success</UI.Button>
                <UI.Button type="warning">warning</UI.Button>
                <UI.Button type="danger">danger</UI.Button>
                <UI.Button type="light">light</UI.Button>
                <UI.Button type="dark">dark</UI.Button>
                <UI.Button type="white">white</UI.Button>
                <UI.Button type="black">black</UI.Button>
                <UI.Button type="transparent">transparent</UI.Button>
            </UI.Grid>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">type:</span>
                <span>primary | secondary | info | success | warning | danger | light | dark | white | black | transparent</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">link:</span>
                <span>optional internal link</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">target:</span>
                <span>_blank | _self | _parent | _top</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Button type="primary"&gt;primary&lt;/UI.Button&gt;
            &lt;UI.Button type="secondary"&gt;secondary&lt;/UI.Button&gt;
            &lt;UI.Button type="info"&gt;info&lt;/UI.Button&gt;
            &lt;UI.Button type="success"&gt;success&lt;/UI.Button&gt;
            &lt;UI.Button type="warning"&gt;warning&lt;/UI.Button&gt;
            &lt;UI.Button type="danger"&gt;danger&lt;/UI.Button&gt;
            &lt;UI.Button type="light"&gt;light&lt;/UI.Button&gt;
            &lt;UI.Button type="dark"&gt;dark&lt;/UI.Button&gt;
            &lt;UI.Button type="white"&gt;white&lt;/UI.Button&gt;
            &lt;UI.Button type="black"&gt;black&lt;/UI.Button&gt;
        </template>
    </CodeExample>
</template>