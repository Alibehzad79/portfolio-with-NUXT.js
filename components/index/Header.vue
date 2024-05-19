<template>
    <div class="my-3 container sticky-top">
        <nav class="navbar navbar-expand-sm bg-white rounded-5 shadow">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/articles">Blog</nuxt-link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control border-end-0 border-dark rounded-end-0 rounded-5" type="search"
                            placeholder="Search" aria-label="Search">
                        <button
                            class="btn btn-outline-success border-dark border-start-0 rounded-start-0 rounded-5 px-4"
                            type="submit"><i class="ri-search-line"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    name: "Header",
    data() {
        return {}
    },
    methods: {},
    mounted() { },
    watch: {}
}
</script>