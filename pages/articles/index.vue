<template>
    <div class="blog p-5">
        <div class="d-flex flex-column justify-content-center align-items-center gap-5">
            <div class="text-center">
                <h2 class="fw-bold">Blog</h2>
                <p class="text-secondary">In our blog we sharing Experience of programming</p>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 align-items-center container" v-if="articles">
                <nuxt-link v-if="articles" v-for="article in articles" :key="article.id"
                    :to="'/articles/' + article.id + '/' + article.title.replaceAll(' ', '-')"
                    class="text-decoration-none">
                    <BlogCard :key="article.id" :title="article.title"
                        image="https://www.wallpapertip.com/wmimgs/83-838296_web-designer-professional-website-background-images.jpg"
                        :content="article.body" />
                </nuxt-link>
            </div>
            <div v-if="error">
                <p class="alert alert-warning w-100">Connection Error</p>
            </div>
            <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>

</template>

<script setup>

const { data: articles, error, pending } = await useFetch('https://jsonplaceholder.typicode.com/posts', { lazy: true })

useSeoMeta({
    title: 'Articles',
    ogTitle: 'Articles',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
});

</script>