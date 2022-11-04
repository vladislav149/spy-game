<template>
  <section class="locations">
    <div class="container">
      <div class="locations__inner">Тут будут места</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpyLocations'
}
</script>

<style lang="scss" scoped>
.locations {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>
