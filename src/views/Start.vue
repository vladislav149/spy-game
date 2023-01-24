<template>
  <div class="game">
    <div class="container">
      <div class="game__inner">
        <spy-game />
      </div>
    </div>
  </div>
</template>

<script>
import SpyGame from '@/components/Game'
export default {
  name: 'SpyStart',
  components: {
    SpyGame
  },
  mounted() {
    if (!this.$store.state.players.players.numberOf) {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
.game {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  &__title {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
  }
}
</style>
