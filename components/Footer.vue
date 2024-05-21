<template>

    <div class="footer bg-white p-5">
        <div class="container d-flex flex-column gap-5">
            <div class="text-center d-flex flex-column gap-4">
                <h4 class="h3 fw-bold text-center">Let's Work Together</h4>
                <nuxt-link to="#"><Button content="Get Start" /></nuxt-link>
            </div>
            <hr class="w-100 text-secondary">
            <div class="d-flex flex-column flex-md-row justify-content-around gap-5 w-100">
                <div class="d-flex flex-column gap-3 col col-md-2">
                    <nuxt-link to="#"><img src="https://logodownload.org/wp-content/uploads/2014/09/nvidia-logo-0.png"
                            alt="LOGO" title="LOGO" class="img-fluid f-logo"></nuxt-link>
                    <p class="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
                        voluptatibus animi, sit perspiciatis ut, tempore, ullam neque iure magni doloremque ratione
                        aliquid autem. Saepe, perferendis?</p>
                    <ul class="nav gap-0 m-0 p-0 rounded-1 bg-light justify-content-around">
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
                <div class="col col-md-2 d-flex flex-column gap-3">
                    <h6>NAVIGATION</h6>
                    <ul class="nav flex-column gap-3">
                        <li class="nav-item"><nuxt-link to="/" class="fw-bold text-decoration-none">Home</nuxt-link>
                        </li>
                        <li class="nav-item"><nuxt-link to="/" class="fw-bold text-decoration-none">Blog</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="col col-md-2 d-flex flex-column gap-3">
                    <h6>CONTACT</h6>
                    <ul class="nav flex-column gap-2">
                        <li class="nav-item">
                            phone: 09147509730
                        </li>
                        <li class="nav-item">
                            Email: alibehzad@duck.com
                        </li>
                    </ul>
                </div>
                <div class="col col-md-2 d-flex flex-column gap-3">
                    <h6>ADDRESS</h6>
                    <p>Iran - Azerbaijan - Ardabil - Vahdat</p>
                </div>
            </div>
            <hr class="w-100">
            <div class="d-flex justify-content-center">
                <span>
                    <i class="ri-copyright-line"></i>
                    2024 <nuxt-link to="#">Alibehzad</nuxt-link>. All Rights Reserved.
                </span>
            </div>
        </div>
    </div>

</template>

<script setup>

</script>