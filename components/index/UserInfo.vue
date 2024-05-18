<template>
    <div class="user-info p-5 rounded-5 container">
        <div class="d-flex flex-column flex-md-row gap-5 align-items-start">
            <div class="col col-md-6 text-start d-flex">
                <div class="col-6 d-flex flex-column justify-content-between gap-2">
                    <h1 class="fw-bold my-name" v-html="profile.name.replace(' ', '<br>')"></h1>
                    <div class="socials d-flex flex-column">
                        <hr class="text-warning fw-bold">
                        <span>Social account</span>
                        <ul class="nav gap-0 m-0 p-0 rounded-1 bg-white justify-content-between">
                            <li class="nav-item"><a href="#" class="nav-link text-dark social"><i
                                        class="ri-instagram-fill"></i></a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark social"><i
                                        class="ri-telegram-fill"></i></a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark social"><i
                                        class="ri-whatsapp-fill"></i></a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark social"><i
                                        class="ri-facebook-fill"></i></a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-dark social"><i
                                        class="ri-tiktok-fill"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <img src="@/public/imgs/my-img.jpeg" alt="My Image" class="img-fluid my-img rounded-circle">
                </div>
            </div>
            <div class="col col-md-6 d-flex flex-column justify-content-between gap-2">
                <h2>I'm a {{ profile.occupation }}<br> in {{profile.address.city}}</h2>
                <p class="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat repellat
                    aliquid
                    consequatur molestias exercitationem voluptate cupiditate temporibus illo modi ex, ratione
                    commodi
                    eum cum distinctio corrupti at laudantium velit qui doloremque nam dignissimos eligendi quaerat
                    ad
                    dolores. Illum, quia laboriosam.</p>
                <nuxt-link><Button content="Let's Talk" /></nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: profile, pending, error, refresh } = await useFetch("https://freetestapi.com/api/v1/users/1")
</script>