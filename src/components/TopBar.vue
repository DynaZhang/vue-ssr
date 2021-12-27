<template>
    <div class="top-bar"></div>
    <container />
</template>

<script>
import Container from "./Container";
export default {
    name: "TopBar",
    components: {Container}
}
</script>

<style scoped>
.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 30px;
    height: 60px;
    border: 1px solid #fefefe;
    background: yellow;
}
</style>