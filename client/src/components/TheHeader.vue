<template>
    <div class="header">
        <div class="title first" @click="goTo('blog')">abandon</div>
        <div class="title" @click="goTo('about')">.work</div>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(name) {
            if (this.$route.name !== name) {
                this.$router.push({ name: name });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../styles/var.scss";

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: #fff;
    .title {
        font-size: 1.5rem;
        line-height: 50px;
        // font-family: "open sans";
        font-family: "CyberPunk", "Pirata One", Arial;
        color: $indigo;
        &.first{
            margin-left: 1rem;
        }
    }
    .item {
        a {
            text-decoration: none;
            color: #000;
        }
        line-height: 50px;
        margin-left: 1rem;
    }
}
@font-face {
    src: url("../assets/font/Cyberpunk.ttf");
    font-family: "CyberPunk";
}
</style>
