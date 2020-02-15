<template>
  <main>
    <h1>{{ page.title.rendered }}</h1>
    <section v-for="module in page.acf.modules" :data-component="module.acf_fc_layout">
      <ACF_Content_Block v-if="module.acf_fc_layout === 'content_block'" :acfData="module" />
      <ACF_Image_Block v-if="module.acf_fc_layout === 'image_block'" :acfData="module" />
    </section>
    <Footer />
  </main>
</template>

<script>
// Global
import Footer from '~/components/Footer.vue'

// ACF
import ACF_Content_Block from '~/components/acf/content_block.vue'
import ACF_Image_Block from '~/components/acf/image_block.vue'

export default {
  components: {
    Footer,
    ACF_Content_Block,
    ACF_Image_Block
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
  },
  head () {
    return {
      title: this.$store.state.pages.find(el => el.slug === this.slug).title.rendered,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
}
</script>