<template>
  <section class="rules">
    <div class="container">
      <div class="rules__inner">Тут будут правила</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpyRules'
}
</script>

<style lang="scss" scoped>
.rules {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>
