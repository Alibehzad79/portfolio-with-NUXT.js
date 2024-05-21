<template>
    <div class="contact p-5 bg-white">
        <di class="container d-flex flex-column gap-4 align-items-center">
            <div class="d-flex flex-column gap-1 text-center col-md-6">
                <h4 class="fw-bold">Get In Touch</h4>
                <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis iure ut
                    recusandae quod! Quos hic veritatis repellendus quas necessitatibus.</p>
            </div>
            <div class="d-flex flex-column flex-md-row gap-5 w-100">
                <div class="form-section d-flex flex-column gap-2 col-md-7">
                    <h4>Leave a Message</h4>
                    <form action="#" method="post" class="form d-flex flex-column gap-2">
                        <div class="d-flex flex-column flex-md-row gap-2 align-items-between">
                            <div class="col col-md-6 d-flex flex-column gap-1">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control bg-light border-0">
                            </div>
                            <div class="col col-md-6 d-flex flex-column gap-1">
                                <label for="email">Email</label>
                                <input type="email" name="email" class="form-control bg-light border-0">
                            </div>
                        </div>
                        <div class="col d-flex flex-column gap-1">
                            <label for="subject">Subject</label>
                            <input type="text" name="subject" class="form-control bg-light border-0">
                        </div>
                        <div class="col d-flex flex-column gap-1">
                            <label for="message">Message</label>
                            <textarea name="message" class="form-control bg-light border-0" rows="10"></textarea>
                        </div>
                        <Button type="submit" content="Send Message" />
                    </form>
                </div>
                <div class="info-to-contact d-flex flex-column gap-3 col-md-4 align-items-center">
                    <div class="d-flex flex-column gap-2 w-100 text-center">
                        <div>
                            <i class="ri-map-fill bg-dark text-warning rounded-circle p-2"></i>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Country:</span>
                            <span>Iran</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>City:</span>
                            <span>Ardabil</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Street:</span>
                            <span>Vahdat</span>
                        </div>
                    </div>
                    <hr class="w-100 text-warning">
                    <div class="d-flex flex-column gap-2 w-100 text-center">
                        <div>
                            <i class="ri-mail-fill bg-dark text-warning rounded-circle p-2"></i>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Email:</span>
                            <span>Alibehzad@duck.com</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Telegram:</span>
                            <span>@gojo_kaissen</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Instagram:</span>
                            <span>@real.alibehzad</span>
                        </div>
                    </div>
                    <hr class="w-100 text-warning">
                    <div class="d-flex flex-column gap-2 w-100 text-center">
                        <div>
                            <i class="ri-phone-fill bg-dark text-warning rounded-circle p-2"></i>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Support:</span>
                            <span>09147509730</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Office:</span>
                            <span>09147509730</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span>Personal:</span>
                            <span>09147509730</span>
                        </div>
                    </div>
                </div>
            </div>
        </di>
    </div>

</template>

<script setup>

</script>