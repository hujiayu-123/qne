<template>
    <div class="admin-home">
        <img class="admin-img" :src="require('@/assets/images/welcome.png')" alt="logo" />
        <h1>welcome to Management Center</h1>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="less" scoped>
    .admin-home {
        text-align: center;
        font-size: 25px;

        .admin-img {
            width: 40%;
        }
    }
</style>