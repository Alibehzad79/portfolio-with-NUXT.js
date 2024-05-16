<template>
    <div class="service-card border p-5 rounded-5 bg-white">
        <div class="d-flex flex-column gap-3 justify-content-start">
            <i :class="props.icon" class="fs-3 border col-2 text-center rounded"></i>
            <h3 class="fw-bold">{{ props.title }}</h3>
            <p class="text-secondary">{{ props.content }}</p>
        </div>
    </div>
</template>

<script setup>

const props = useAttrs()

</script>