<template>
  <main>
    <h1>{{ page.title.rendered }}</h1>
    <div v-html="page.content.rendered"></div>
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
    page() {
      return this.pages.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPages");
  }
}
</script>