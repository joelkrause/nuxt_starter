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

<style lang="scss">
.site__header {
    display:flex;
    justify-content: space-between;
    padding:$padding_sm;
    @include breakpoint(up,tablet-landscape){
      padding:$padding_xl;
    }
    &-logo{
      svg{
        max-width:50px;
        height:auto;
      }
      a{
        color:black;
        text-decoration: none;
      }
    }
}
</style>