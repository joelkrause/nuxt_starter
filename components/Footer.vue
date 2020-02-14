<template>
    <footer class="site__footer">
        &copy; Copyright Nuxt Test {{ new Date().getFullYear() }}
    </footer>
</template>

<style lang="scss">
.site__footer {
    padding:$padding_sm;
    @include breakpoint(up,tablet-landscape){
      padding:$padding_xl;
    }
}
</style>