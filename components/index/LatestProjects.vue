<template>
    <div class="bg-white p-5">
        <div class="container d-flex flex-column gap-3 justify-content-center align-items-center">
            <div class="d-flex flex-column text-center col col-md-6 gap-2">
                <h2 class="fw-bold">Latest Projects</h2>
                <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate sed
                    suscipit veniam.
                    Repellat dolore iusto, modi soluta aspernatur quis laudantium enim, necessitatibus officia
                    aperiam, quae ab veritatis quaerat! Id!</p>
            </div>
            <swiper :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :slidesPerView="1" :spaceBetween="10" :pagination="{
                clickable: true,
            }" :breakpoints="{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="article in articles" :key="article">
                    <div class="col">
                        <div class="card h-100">
                            <img :src="article.image" class="card-img-top img-fluid latest-card-img"
                                :alt="article.title">
                            <div class="card-body">
                                <h5 class="card-title latest-project-title">{{ article.title }}</h5>
                            </div>
                            <div class="card-footer bg-white border-0">
                                <router-link class="text-warning nav-link text-start">More</router-link>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import './assets/style.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const modules = [Autoplay, Navigation]
const { pending, error, refresh, data: articles } = await useFetch('https://fakestoreapi.com/products')
</script>