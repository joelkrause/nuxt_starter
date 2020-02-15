<template>
    <header class="site__header">
        <div class="site__header-logo">
          <nuxt-link to="/">
            <Logo />
          </nuxt-link>
        </div>
        <Navigation />
    </header>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Navigation,
    Logo
  }
}
</script>