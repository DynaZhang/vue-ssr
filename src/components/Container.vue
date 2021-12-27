<template>
    <div class="container">
        <side-bar />
        <div class="main"></div>
    </div>
</template>

<script>
import SideBar from "./SideBar";
export default {
    name: "Container",
    components: {SideBar}
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
.container .main {
    flex: 1;
    background: blue;
}
</style>