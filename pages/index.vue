<template>
    <div class="index d-flex flex-column gap-5 my-4">
        <!-- user info -->
        <UserInfo />
        <!-- companies -->
        <CompanyList />
        <!-- Services Section -->
        <Services />
        <!-- Latest Projects -->
        <LatestProjects />
        <!-- Resume  -->
        <Resume />
    </div>

</template>


<script setup>
import Resume from '~/components/index/Resume.vue';

useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});

</script>