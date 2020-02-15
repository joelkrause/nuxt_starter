<template>
  <main>
    <div class="container">
        <h1 class="title">
          nuxt-text
        </h1>
        <h2 class="subtitle">
          Testing Nuxt.js
        </h2>
<div class="page" v-for="page in pages" :key="page.id">
      <h3>
      <!-- for each one of them, we’ll render their title, and link off to their individual page -->
        <a :href="`${page.slug}`">{{ page.title.rendered }}</a>
      </h3>
      <a :href="`${page.slug}`" class="readmore">Read more ⟶</a>
    </div>
      </div>
    <Footer />
  </main>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
computed: {
  pages() {
    return this.$store.state.pages;
  },
 },
created() {
  this.$store.dispatch("getPages");
},
};
</script>