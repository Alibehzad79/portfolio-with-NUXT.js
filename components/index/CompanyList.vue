<template>
    <div class="company-list p-4 d-flex gap-4 justify-content-center">
        <img v-for="company in companyList" :key="company" :src="company.download_url" :alt="company.title"
            class="img-fluid company-img rounded">
        <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p v-if="error">Connection Error</p>
    </div>
</template>

<script setup>
const { pending, error, data: companyList } = await useFetch('https://picsum.photos/v2/list?page=1&limit=10')
</script>