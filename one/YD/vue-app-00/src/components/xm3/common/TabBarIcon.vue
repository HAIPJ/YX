<template>
    <div>
        <!-- TabBarIcon.vue -->
        <img :src="focused?selectedImage:normalImage" class="imgstyle" />
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    props:{
        focused:false,
        selectedImage:{default:""},
        normalImage:{default:""}
    }
}
</script>

<style scoped>
.imgstyle{
    width:30px; height: 30px;
}
</style>
