<template>
    <div class="latest-blog p-5">
        <div class="container d-flex flex-column justify-content-center gap-5">
            <div class="d-flex flex-column gap-1 col col-md-6 m-auto text-center">
                <h4 class="fw-bold">Latest Blog</h4>
                <p class="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae explicabo, est praesentium error
                    eligendi dolor assumenda commodi molestias maiores suscipit.
                </p>
            </div>
            <div v-if="articles" class="d-flex flex-column gap-5">
                <div class="row row-cols-1 row-cols-md-2 g-3 align-items-center">
                    <nuxt-link v-for="article in articles" :key="article.id"
                        :to="'/articles/' + article.id + '/' + article.title.replaceAll(' ', '-')"
                        class="text-decoration-none">
                        <BlogCard :title="article.title" :key="article.id"
                            image="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=background-blur-clean-531880.jpg&fm=jpg"
                            :content="article.content" />
                    </nuxt-link>
                </div>
                <div class="text-center">
                    <nuxt-link to="/articles"><Button content="Explore More" class="" /></nuxt-link>
                </div>
            </div>
            <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p v-if="error" class="alert alert-warning">Connection Error</p>
        </div>
    </div>
</template>

<script setup>
const { data: articles, pending, error } = await useAsyncData('articles', () => $fetch('https://freetestapi.com/api/v1/posts?limit=3'))
</script>