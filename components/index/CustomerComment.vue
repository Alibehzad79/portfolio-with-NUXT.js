<template>
    <div class="customer-comment bg-white p-5">
        <div class="container d-flex gap-4 flex-column">
            <div class="d-flex justify-content-center align-items-center">
                <div class="d-flex flex-column justify-content-between col-md-6  text-center">
                    <h4 class="fw-bold">Testemonials</h4>
                    <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia
                        ratione voluptatibus et reiciendis esse quidem. Dolor voluptates nemo eos eius, hic, facilis
                        saepe illum accusantium adipisci ipsam veniam. Corporis?</p>
                </div>
            </div>
            <div class="p-5">
                <swiper :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
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
                }" :slidesPerView="4" :spaceBetween="30" :centeredSlides="true" :pagination="{
                    clickable: true
                }" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="comment in comments" :key="comment">
                        <div class="d-flex flex-column gap-2">
                            <div class="d-flex flex-column flex-md-row gap-4">
                                <img :src="comment.image" :alt="comment.name" class="img-fluid rounded-circle"
                                    style="width: 64px; height: 64px;">
                                <div class="d-flex flex-column text-start">
                                    <h5 class="fw-bold">{{ comment.name }}</h5>
                                    <p class="text-secondary">{{ comment.party }}</p>
                                </div>
                            </div>
                            <p class="text-secondary text-start">
                                {{ comment.biography }}
                            </p>
                        </div>
                    </swiper-slide>
                    <div v-if="pending" class="spinner-border align-items-center text-center" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <div v-if="error">
                        <p class="alert alert-warning">Connection Error</p>
                    </div>
                </swiper>
                <div class="text-center mt-5">
                    <nuxt-link to="#"><Button content="Start Your Project" style="width: 200px;" /></nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import './assets/style.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const modules = [Autoplay, Navigation]


const { data: comments, pending, error, refresh } = await useFetch('https://freetestapi.com/api/v1/politicians?limit=10')
</script>