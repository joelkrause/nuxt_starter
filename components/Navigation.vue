<template>
    <nav class="site__nav">
        <ul>
            <li v-for="item in menus" :key="1">
                <nuxt-link :to="item.slug">{{ item.title }} <span class="arrow" v-if="item.child_items">&darr;</span></nuxt-link>
                <ul v-if="item.child_items" class="sub-menu">
                    <li v-for="item in item.child_items" :key="1">
                        <nuxt-link :to="item.slug">{{ item.title }}</nuxt-link>
                    </li>
                </ul>
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