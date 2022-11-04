<template>
  <section class="professions">
    <div class="container">
      <div class="professions__inner">тут будут профессии</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpyProfessions'
}
</script>

<style lang="scss" scoped>
.professions {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
</style>
