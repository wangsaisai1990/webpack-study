<template>
    <div>
        <h1>account 组件</h1>
        <router-link :to="{name: 'register'}" >我的收藏</router-link>
        <router-link :to="{name: 'login'}" >我的足迹</router-link>
        <router-view />
    </div>
    
</template>
<script>

</script>

<style lang="stylus" scoped>

</style>