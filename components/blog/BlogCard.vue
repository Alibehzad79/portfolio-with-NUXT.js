<template>
    <div class="blog-card p-3 bg-white rounded-3">
        <div class="col">
            <div class="card border-0 gap-2">
                <img :src="props.image" class="card-img-top rounded-3" :alt="props.title" :title="props.title">
                <div class="card-body">
                    <h5 class="card-title" style="">{{ props.title }}</h5>
                    <p class="card-text text-truncate text-secondary" style="">{{ props.content }}</p>
                </div>
                <div class="card-footer border-0 bg-white">
                    <button class="btn btn-outline-warning">Read More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = useAttrs()


</script>