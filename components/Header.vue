<template>
    <header class="site__header">
        <div class="site__header-logo">
          <nuxt-link to="/">
            Site Name
          </nuxt-link>
        </div>
        <Navigation />
    </header>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
.site__header {
    display:flex;
    justify-content: space-between;
    padding:$padding_sm;
    @include breakpoint(up,tablet-landscape){
      padding:$padding_xl;
    }
    &-logo{
      a{
        color:black;
        text-decoration: none;
      }
    }
}
</style>