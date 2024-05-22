<template>
    <div class="blog-detail p-5">
        <div class="container d-flex flex-column gap-3 align-items-start col-md-6" v-if="article">
            <div>
                <span class="bg-warning rounded-5 px-2">May 9, 2021</span>
                <div class="d-flex flex-column gap-1">
                    <h1 class="fw-bold">{{ article.title }}</h1>
                </div>
            </div>
            <div>
                <img src="https://www.webzin.in/wp-content/uploads/2014/08/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
                    :alt="article.title" :title="article.titles" class="img-fluid rounded-5">
            </div>
            <div>
                <p v-html="article.body"></p>
            </div>
        </div>
        <div class="container d-flex m-auto align-items-center justify-content-center">
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

const router = useRoute()

const { data: article, error, pending } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${router.params.id}`, { lazy: true })

</script>