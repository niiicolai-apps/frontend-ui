<template>
    <UI.Container>
        <UI.Flex direction="horizontal" class="border-b-1 border-solid border-secondary pb-5 mb-5 mt-5">
            <UI.Button type="primary" link="/">Text</UI.Button>
            <UI.Button type="primary" link="/display">Display</UI.Button>
            <UI.Button type="primary" link="/utilities">Utilities</UI.Button>
            <UI.Button type="primary" link="/transitions">Transitions</UI.Button>
            <UI.Button type="primary" link="/buttons">Buttons</UI.Button>
            <UI.Button type="primary" link="/links">Links</UI.Button>
            <UI.Button type="primary" link="/forms">Forms</UI.Button>
        </UI.Flex>

        <router-view></router-view>
    </UI.Container>
</template>

<script setup>
import UI from '../index.js';
</script>