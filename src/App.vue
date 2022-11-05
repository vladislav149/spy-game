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
  color: $grey-100;
}

.main {
  margin-bottom: auto;
}

.container {
  max-width: 596px;
  margin: 0 auto;
  padding: 0 10px;
}

.wrapper .border {
  border: 1px solid $grey-300;
  border-radius: 5px;
  background-color: $teal-100;
}
</style>
