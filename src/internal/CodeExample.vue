<template>
    <div class="border-b-1 border-solid border-secondary pb-5 mb-5">
        <div class="mb-5">
            <slot name="example" />
        </div>

        <div class="mb-5">
            <Paragraph class="mb-3 font-bold">Options:</Paragraph>
            <ul class="text-sm flex flex-col gap-3">
                <slot name="options" />
            </ul>
        </div>

        <Paragraph class="mb-3 font-bold">Usage:</Paragraph>
        <CodeBlock>
            <slot name="code" />
        </CodeBlock>
    </div>
</template>

<script setup>
import Paragraph from '../components/Paragraph.vue';
import CodeBlock from '../components/CodeBlock.vue';
</script>