<template>
    <div class="resume container d-flex flex-column gap-3 justify-content-center align-items-center">
        <div class="d-flex flex-column text-center col col-md-6 gap-2">
            <h4 class="fw-bold">My Resume</h4>
            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptate sed
                suscipit veniam.
                Repellat dolore iusto, modi soluta aspernatur quis laudantium enim, necessitatibus officia
                aperiam, quae ab veritatis quaerat! Id!</p>
        </div>
        <div class="d-flex flex-column flex-md-row gap-4 justify-content-start align-items-start w-100 p-5 rounded-4">
            <div class="d-flex flex-md-column flex-sm-row gap-4 col col-md-3" id="v-pills-tab" role="tablist"
                aria-orientation="vertical">
                <span class="tab active" id="education-tab" data-bs-toggle="pill" data-bs-target="#education" role="tab"
                    aria-controls="education" aria-selected="true">Education</span>
                <span class="tab" id="experianc-tab" data-bs-toggle="pill" data-bs-target="#experianc" role="tab"
                    aria-controls="experianc" aria-selected="false">Experience</span>
                <span class="tab" id="skills-tab" data-bs-toggle="pill" data-bs-target="#skills" role="tab"
                    aria-controls="skills" aria-selected="false">Professional Skills</span>
            </div>
            <div class="col-12 col-md-9 bg-white p-5 rounded tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active gap-3" id="education" role="tabpanel"
                    aria-labelledby="education-tab" tabindex="0">
                    <div class="d-flex flex-column flex-md-row gap-5">
                        <div class="col col-md-3">
                            <h4 class="h3 text-dark">Education title</h4>
                            <span class="badge bg-warning">Jan 1016 - Dec 2021</span>
                        </div>
                        <div class="col col-md-8 d-flex flex-column gap-3">
                            <h4 class="h3 text-dark">Course title</h4>
                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Deleniti
                                consequuntur velit numquam omnis amet exercitationem voluptates nihil, quod maiores
                                soluta dolorem magnam iusto ad ipsa corporis architecto voluptate, tempore dolores?
                            </p>
                        </div>
                    </div>
                    <hr class="text-secondary d-block" />
                    <div class="d-flex flex-column flex-md-row gap-5">
                        <div class="col col-md-3">
                            <h4 class="h3 text-dark">Education title</h4>
                            <span class="badge bg-warning">Jan 1016 - Dec 2021</span>
                        </div>
                        <div class="col col-md-8 d-flex flex-column gap-3">
                            <h4 class="h3 text-dark">Course title</h4>
                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Deleniti
                                consequuntur velit numquam omnis amet exercitationem voluptates nihil, quod maiores
                                soluta dolorem magnam iusto ad ipsa corporis architecto voluptate, tempore dolores?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="experianc" role="tabpanel" aria-labelledby="experianc-tab" tabindex="0">
                    <div class="d-flex flex-column flex-md-row gap-5">
                        <div class="col col-md-3">
                            <h4 class="h3 text-dark">Experiance title</h4>
                            <span class="badge bg-warning">Jan 1016 - Dec 2021</span>
                        </div>
                        <div class="col col-md-8 d-flex flex-column gap-3">
                            <h4 class="h3 text-dark">Project title</h4>
                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Deleniti
                                consequuntur velit numquam omnis amet exercitationem voluptates nihil, quod maiores
                                soluta dolorem magnam iusto ad ipsa corporis architecto voluptate, tempore dolores?
                            </p>
                        </div>
                    </div>
                    <hr class="text-secondary d-block" />
                    <div class="d-flex flex-column flex-md-row gap-5">
                        <div class="col col-md-3">
                            <h4 class="h3 text-dark">Experiance title</h4>
                            <span class="badge bg-warning">Jan 1016 - Dec 2021</span>
                        </div>
                        <div class="col col-md-8 d-flex flex-column gap-3">
                            <h4 class="h3 text-dark">Project title</h4>
                            <p class="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Deleniti
                                consequuntur velit numquam omnis amet exercitationem voluptates nihil, quod maiores
                                soluta dolorem magnam iusto ad ipsa corporis architecto voluptate, tempore dolores?
                            </p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab" tabindex="0">
                    <div class="d-flex flex-column gap-5">
                        <div class="d-flex flex-column gap-2">
                            <span class="h5 fw-bold">Python</span>
                            <div class="progress" role="progressbar" aria-label="Python" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 80%">
                                    80%
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-2">
                            <span class="h5 fw-bold">Django</span>
                            <div class="progress" role="progressbar" aria-label="Python" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 60%">
                                    60%
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-2">
                            <span class="h5 fw-bold">Javascript</span>
                            <div class="progress" role="progressbar" aria-label="Python" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 40%">
                                    40%
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-2">
                            <span class="h5 fw-bold">Nuxtjs</span>
                            <div class="progress" role="progressbar" aria-label="Python" aria-valuenow="75"
                                aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 10%">
                                    10%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>