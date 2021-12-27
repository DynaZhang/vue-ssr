<!--
 * @author: zhangzhulei(zhangzhulei@baidu.com)
 * @file: xxxxxx
 * @date: Do not edit
-->
<template>
    <div>
        <top-bar />
        <container />
    </div>
</template>

<script>
import Container from './components/Container.vue';
import TopBar from "./components/TopBar";
export default {
    name: "App",
    components: {TopBar,Container}
}
</script>

<style scoped>

</style>