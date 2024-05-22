<template>
    <button class="custom-btn my-btn"><span>{{props.content}}</span></button>
</template>

<script setup>
const props = useAttrs()
</script>