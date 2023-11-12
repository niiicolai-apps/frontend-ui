<script setup>
import UI from '../../index.js';
import CodeExample from '../internal/CodeExample.vue';
import { ref } from 'vue';

const textValue = ref('text input');
const emailValue = ref('email input');
const passwordValue = ref('password input');
const numberValue = ref(0);
const rangeValue = ref(0);
const dateValue = ref('2021-01-01');
const timeValue = ref('12:00');
const datetimeValue = ref('2021-01-01T12:00');
const textareaValue = ref('textarea input');
const checkboxValue = ref(true);

const options = ref([
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }
])
const selectedSingleValue = ref(options.value[1]);
const selectedMultipleValue = ref([options.value[1], options.value[2]]);
</script>

<template>
    <CodeExample>
        <template #example>
            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="text-input">Text input:</UI.Label>
                <UI.Input id="text-input" type="text" :startValue="textValue" placeholder="text input"
                    v-on:update:value="v => textValue = v" />
                <div class="pt-3">
                    Output: {{ textValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="email-input">E-mail input:</UI.Label>
                <UI.Input id="email-input" type="email" :startValue="emailValue" placeholder="email input"
                    v-on:update:value="v => emailValue = v" />
                <div class="pt-3">
                    Output: {{ emailValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="password-input">Password input:</UI.Label>
                <UI.Input id="password-input" type="password" :startValue="passwordValue" placeholder="password input"
                    v-on:update:value="v => passwordValue = v" />
                <div class="pt-3">
                    Output: {{ passwordValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="number-input">Number input:</UI.Label>
                <UI.Input id="number-input" type="number" :startValue="numberValue" placeholder="number input"
                    v-on:update:value="v => numberValue = v" />
                <div class="pt-3">
                    Output: {{ numberValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="range-input">Range input:</UI.Label>
                <UI.Input id="range-input" type="range" :startValue="rangeValue" placeholder="range input"
                    v-on:update:value="v => rangeValue = v" />
                <div class="pt-3">
                    Output: {{ rangeValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="date-input">Date input:</UI.Label>
                <UI.Input id="date-input" type="date" :startValue="dateValue" placeholder="date input"
                    v-on:update:value="v => dateValue = v" />
                <div class="pt-3">
                    Output: {{ dateValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="time-input">Time input:</UI.Label>
                <UI.Input id="time-input" type="time" :startValue="timeValue" placeholder="time input"
                    v-on:update:value="v => timeValue = v" />
                <div class="pt-3">
                    Output: {{ timeValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="datetime-input">Datetime input:</UI.Label>
                <UI.Input id="datetime-input" type="datetime-local" :startValue="datetimeValue" placeholder="datetime input"
                    v-on:update:value="v => datetimeValue = v" />
                <div class="pt-3">
                    Output: {{ datetimeValue }}
                </div>
            </div>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">type:</span>
                <span>text | email | password | number | range | date | time | datetime-local</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">startValue:</span>
                <span>optional start value</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">placeholder:</span>
                <span>optional placeholder</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Input type="text" startValue="start value" placeholder="text input" v-on:update:value="v => textValue =
            v" /&gt;
        </template>
    </CodeExample>

    <CodeExample>
        <template #example>
            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="textarea-input">Textarea input:</UI.Label>
                <UI.Textarea id="textarea-input" :startValue="textareaValue" placeholder="text area input"
                    v-on:update:value="v => textareaValue = v" />
                <div class="pt-3">
                    Output: {{ textareaValue }}
                </div>
            </div>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">startValue:</span>
                <span>optional start value</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">placeholder:</span>
                <span>optional placeholder</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Input type="text" startValue="start value" placeholder="text input" v-on:update:value="v => textValue =
            v" /&gt;
        </template>
    </CodeExample>

    <CodeExample>
        <template #example>
            <div class="border-1 border-solid p-3 rounded mb-3 flex flex-col gap-3">
                <UI.Label for="select-input">Select input:</UI.Label>
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="primary" size="3xs" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="secondary" size="2xs" transition_name="slide-down" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="success" size="xs" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="danger" size="sm" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="warning" size="md" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="info" size="lg" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="light" size="2xl" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="dark" size="3xl" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="white" size="4xl" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="black" size="5xl" v-on:update:value="v => selectedSingleValue = v" />
                <UI.Select id="select-input" :startOption="selectedSingleValue" :options="options"
                    type="transparent" size="5xl" v-on:update:value="v => selectedSingleValue = v" />
                <div class="pt-3">
                    Output: {{ selectedSingleValue }}
                </div>
            </div>

            <div class="border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="select-input-multiple">Select input:</UI.Label>
                <UI.Select id="select-input-multiple" :startOption="selectedMultipleValue" :options="options"
                    :multiple="true" v-on:update:value="v => selectedMultipleValue = v" />
                <div class="pt-3">
                    Output: {{ selectedMultipleValue }}
                </div>
            </div>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">startOption:</span>
                <span>optional start option</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">options:</span>
                <span>array of objects with value and label</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">multiple:</span>
                <span>true | false</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">size:</span>
                <span>3xs | 2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">type:</span>
                <span>primary | secondary | success | danger | warning | info | light | dark | white | black |
                    transparent</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">transition_name:</span>
                <span>fade | slide-left | slide-right | slide-up | slide-down</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Select
            :startOption="selectedSingleValue"
            :options="options"
            v-on:update:value="v => selectedSingleValue = v" /&gt;

            &lt;UI.Select
            :startOption="selectedMultipleValue"
            :options="options"
            :multiple="true"
            v-on:update:value="v => selectedMultipleValue = v" /&gt;
        </template>
    </CodeExample>

    <CodeExample>
        <template #example>
            <div class="flex flex-col gap-3 border-1 border-solid p-3 rounded mb-3">
                <UI.Label for="checkbox-input">Checkbox input:</UI.Label>
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="2xs" type="default"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="xs" type="primary"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="sm" type="secondary"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="md" type="success"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="lg" type="danger"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="xl" type="warning"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="2xl" type="info"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="3xl" type="light"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="4xl" type="dark"
                    v-on:update:value="v => checkboxValue = v" />
                <UI.Checkbox id="checkbox-input" :startValue="checkboxValue" size="5xl" type="white"
                    v-on:update:value="v => checkboxValue = v" />
                <div class="pt-3">
                    Output: {{ checkboxValue ? 'checked' : 'unchecked' }}
                </div>
            </div>
        </template>

        <template #options>
            <li class="flex gap-1">
                <span class="font-bold">startValue:</span>
                <span>optional start value</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">size:</span>
                <span>3xs | 2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">type:</span>
                <span>primary | secondary | success | danger | warning | info | light | dark</span>
            </li>
            <li class="flex gap-1">
                <span class="font-bold">transition_name:</span>
                <span>fade | slide-left | slide-right | slide-up | slide-down</span>
            </li>
        </template>

        <template #code>
            &lt;UI.Checkbox
            :startValue="checkboxValue"
            v-on:update:value="v => checkboxValue = v" /&gt;
        </template>
    </CodeExample>
</template>