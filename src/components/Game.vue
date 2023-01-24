<template>
  <div @click="currentCard++">
    <div v-if="currentCard < cards.length">
      <div>Игрок - {{ Math.round((currentCard + 1) / 2) }}</div>
      <div>{{ cards[currentCard] }}</div>
    </div>
    <div v-else>время пошло...</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import shuffleArr from '@/helpers/helper'
export default {
  name: 'SpyGame',
  data() {
    return {
      textBetweenPlayers: 'Намите на экран',
      place: 'метро',
      currentCard: 0
    }
  },
  computed: {
    ...mapGetters('players', ['getCardArr']),
    shuffleCard() {
      return shuffleArr(this.getCardArr(this.place))
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

<style></style>
