<template>
  <div class="wrapper">
    <spy-header />
    <main class="main">
      <router-view />
    </main>
    <spy-footer />
  </div>
</template>

<script>
import SpyHeader from '@/components/Header'
import SpyFooter from '@/components/Footer'
export default {
  components: {
    SpyFooter,
    SpyHeader
  }
}
</script>

<style lang="scss">
.wrapper {
  background-color: $grey;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  margin-bottom: auto;
}

.container {
  max-width: 596px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>
