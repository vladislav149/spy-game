<template>
  <transition name="game" appear mode="out-in">
    <div @click="currentCard++" class="game" :key="currentCard">
      <div v-if="currentCard < cards.length">
        <div class="t-a-center">Игрок - {{ numberPlayer }}</div>
        <div class="t-a-center">{{ cards[currentCard] }}</div>
      </div>
      <div v-else>время пошло...</div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import shuffleArr from '@/helpers/helper'
export default {
  name: 'SpyGame',
  data() {
    return {
      textBetweenPlayers: 'Нажмите на экран',
      place: 'метро',
      currentCard: 0
    }
  },
  computed: {
    ...mapGetters('players', ['getCardArr']),
    shuffleCard() {
      return shuffleArr(this.getCardArr(this.place))
    },
    numberPlayer() {
      return Math.round((this.currentCard + 1) / 2)
    },
    cards() {
      const arr = []
      for (let i = 0; i < this.shuffleCard.length * 2; i++) {
        if (!(i % 2)) arr.push(this.textBetweenPlayers)
        else arr.push(this.shuffleCard[(i - 1) / 2])
      }
      return arr
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.game {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 65px);
  position: relative;
}

.game-enter-active {
  animation: gameIn 1s;
}

.game-leave-active {
  animation: gameOut 0.5s;
}

@keyframes gameIn {
  0% {
    transform: translateY(-100%);
  }
  60% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-15%);
  }
  90% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes gameOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
