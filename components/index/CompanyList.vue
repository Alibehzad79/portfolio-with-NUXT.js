<template>
    <div class="company-list p-4 d-flex gap-4 justify-content-center" v-if="companyList">
        <img v-for="company in companyList" :key="company" :src="company.download_url" :alt="company.title"
            class="img-fluid company-img rounded" loading="lazy">

    </div>
    <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <p v-if="error">Connection Error</p>
</template>

<script setup>
const { data: companyList, pending, error } = await useFetch('https://picsum.photos/v2/list?page=1&limit=10', { lazy: true })
</script>