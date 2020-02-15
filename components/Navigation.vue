<template>
    <nav class="site__nav">
        <ul>
            <li v-for="item in menus" :key="1">
                <nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
computed: {
  menus() {
    return this.$store.state.menus;
  },
 },
created() {
  this.$store.dispatch("getMenu");
},
};
</script>

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