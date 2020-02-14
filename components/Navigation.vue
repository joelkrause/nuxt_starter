<template>
    <nav class="site__nav">
        <ul>
            <li>
                <nuxt-link to="/">Link</nuxt-link>
                <nuxt-link to="about">About</nuxt-link>
                <nuxt-link to="/">Link</nuxt-link>
                <nuxt-link to="/">Link</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.site__nav {
    ul,li{
        list-style: none;
        padding: 0;
        margin:0;
    }
    ul{
        display: flex;
        li{
            &:not(:last-of-type){
                margin-right: 1rem;
            }

            a {
                color:black;
                text-decoration: none;
            }
        }
    }
}
</style>