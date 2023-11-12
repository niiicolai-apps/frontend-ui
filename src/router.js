import { createRouter, createWebHashHistory } from 'vue-router'

import TextExamples from './examples/TextExamples.vue'
import ButtonExamples from './examples/ButtonExamples.vue'
import FormExamples from './examples/FormExamples.vue'
import DisplayExamples from './examples/DisplayExamples.vue'
import LinkExamples from './examples/LinkExamples.vue'
import TransitionExamples from './examples/TransitionExamples.vue'
import UtilitiesExamples from './examples/UtilitiesExamples.vue'

const routes = [
    { path: '/', component: TextExamples },
    { path: '/buttons', component: ButtonExamples },
    { path: '/forms', component: FormExamples },
    { path: '/display', component: DisplayExamples },
    { path: '/links', component: LinkExamples },
    { path: '/transitions', component: TransitionExamples },
    { path: '/utilities', component: UtilitiesExamples },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
