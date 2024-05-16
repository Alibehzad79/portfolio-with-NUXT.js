<template>

    <div class="blog p-5 bg-white rounded-5">
        <p>Article Page</p>
        <p v-for="article in data" :key="article">
            <nuxt-link :to="'/articles/'+article.id+'/'+article.slug">{{article.title}}</nuxt-link>
        </p>
    </div>

</template>

<script>
    export default {
        name: "Blog",
        data() {
            return {
                data: [
                    {
                        id: 1,
                        title: "my title",
                        slug: "my-title",
                    },
                    {
                        id: 2,
                        title: "my title 2",
                        slug: "my-title-2",
                    },
                    {
                        id: 3,
                        title: "my title 3",
                        slug: "my-title-3",
                    }
                ]
            }
        },
    }
</script>