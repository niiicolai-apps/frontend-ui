<template>
    <div class="overflow-hidden">
        <div class="mb-5 h-5">
            <Transition :name="name">
                <div v-if="show">
                    {{ name }}
                </div>
            </Transition>
        </div>    

        <Paragraph class="mb-3 font-bold">Usage:</Paragraph>
        <CodeBlock>
            &lt;Transition :name="name"&gt;
                &lt;div v-if="show"&gt;
                    {{ name }}
                &lt;/div&gt;
            &lt;/Transition&gt;
        </CodeBlock>
    </div>
</template>

<script setup>
import Paragraph from '../components/Paragraph.vue';
import CodeBlock from '../components/CodeBlock.vue';

import { ref } from 'vue';

const show = ref(true);
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

setInterval(() => {
    show.value = !show.value;
}, 1000)
</script>