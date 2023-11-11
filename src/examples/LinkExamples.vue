<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
</script>

<template>
    <CodeExample>
        <template #example>
            <div class="flex flex-row gap-3" style="background-color: rgb(240, 240, 240);">
                <UI.Link type="primary" to="/" target="_blank" :external="true">primary</UI.Link>
                <UI.Link type="secondary" to="/" target="_blank" :external="true">secondary</UI.Link>
                <UI.Link type="info" to="/" target="_blank" :external="true">info</UI.Link>
                <UI.Link type="success" to="/" target="_blank" :external="true">success</UI.Link>
                <UI.Link type="warning" to="/" target="_blank" :external="true">warning</UI.Link>
                <UI.Link type="danger" to="/" target="_blank" :external="true">danger</UI.Link>
                <UI.Link type="light" to="/" target="_blank" :external="true">light</UI.Link>
                <UI.Link type="dark" to="/" target="_blank" :external="true">dark</UI.Link>
                <UI.Link type="white" to="/" target="_blank" :external="true">white</UI.Link>
                <UI.Link type="black" to="/" target="_blank" :external="true">black</UI.Link>
                <UI.Link type="transparent" to="/" target="_blank" :external="true">transparent</UI.Link>
            </div>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">type:</span>
                <span>primary | secondary | info | success | warning | danger | light | dark | white | black | transparent</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">to:</span>
                <span>any</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">target:</span>
                <span>_blank | _self | _parent | _top</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">external:</span>
                <span>true | false</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Link type="primary" to="/" target="_blank" :external="true"&gt;primary&lt;/UI.Link&gt;
            &lt;UI.Link type="secondary" to="/" target="_blank" :external="true"&gt;secondary&lt;/UI.Link&gt;
            &lt;UI.Link type="info" to="/" target="_blank" :external="true"&gt;info&lt;/UI.Link&gt;
            &lt;UI.Link type="success" to="/" target="_blank" :external="true"&gt;success&lt;/UI.Link&gt;
            &lt;UI.Link type="warning" to="/" target="_blank" :external="true"&gt;warning&lt;/UI.Link&gt;
            &lt;UI.Link type="danger" to="/" target="_blank" :external="true"&gt;danger&lt;/UI.Link&gt;
            &lt;UI.Link type="light" to="/" target="_blank" :external="true"&gt;light&lt;/UI.Link&gt;
            &lt;UI.Link type="dark" to="/" target="_blank" :external="true"&gt;dark&lt;/UI.Link&gt;
            &lt;UI.Link type="white" to="/" target="_blank" :external="true"&gt;white&lt;/UI.Link&gt;
            &lt;UI.Link type="black" to="/" target="_blank" :external="true"&gt;black&lt;/UI.Link&gt;
        </template>
    </CodeExample>
</template>