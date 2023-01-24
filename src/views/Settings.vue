<template>
  <section class="settings">
    <div class="container">
      <div class="settings__inner">
        <form class="settings__form" @submit.prevent="startGame">
          <ul class="settings__list">
            <li class="settings__item">
              <label class="settings__label" for="players"
                >Количество игроков</label
              >
              <div class="settings__box">
                <button
                  @click="numberOfPlayers--"
                  :disabled="numberOfPlayers <= 3"
                  class="settings__sign border"
                  type="button"
                >
                  -
                </button>
                <input
                  id="players"
                  class="settings__input border"
                  type="number"
                  min="3"
                  placeholder="количество игроков"
                  v-model="numberOfPlayers"
                  disabled
                />
                <button
                  @click="numberOfPlayers++"
                  class="settings__sign border"
                  type="button"
                >
                  +
                </button>
              </div>
            </li>

            <li class="settings__item">
              <label class="settings__label" for="spy">
                Количество шпионов - {{ numberOfSpy }}
              </label>
              <input
                id="spy"
                class="settings__range"
                type="range"
                v-model="numberOfSpy"
                min="1"
                :max="numberOfPlayers"
              />
            </li>

            <li class="settings__item">
              <h3 class="settings__title">Время:</h3>
              <div class="settings__container">
                <div class="settings__time">
                  <label
                    class="settings__label settings__label--time"
                    for="minutes"
                    >Минуты</label
                  >
                  <div class="settings__block-time">
                    <input
                      id="minutes"
                      class="settings__input-time border"
                      type="number"
                      v-model="minutes"
                      min="0"
                      disabled
                    />
                    <div class="settings__col">
                      <button
                        @click="minutes++"
                        class="settings__btn-time border"
                        type="button"
                      >
                        <svg
                          class="arrow-up"
                          xmlns="http://www.w3.org/2000/svg"
                          xml:space="preserve"
                          width="30"
                          height="30"
                          style="enable-background: new 0 0 128 128"
                          viewBox="0 0 128 128"
                        >
                          <path
                            d="M111 40.5 64 87.499M64 87.499 17 40.5"
                            style="
                              fill: none;
                              stroke: #c4d1d6;
                              stroke-width: 12;
                              stroke-linecap: square;
                              stroke-miterlimit: 10;
                            "
                          />
                        </svg>
                      </button>
                      <button
                        @click="minutes--"
                        :disabled="!minutes"
                        class="settings__btn-time border"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xml:space="preserve"
                          width="30"
                          height="30"
                          style="enable-background: new 0 0 128 128"
                          viewBox="0 0 128 128"
                        >
                          <path
                            d="M111 40.5 64 87.499M64 87.499 17 40.5"
                            style="
                              fill: none;
                              stroke: #c4d1d6;
                              stroke-width: 12;
                              stroke-linecap: square;
                              stroke-miterlimit: 10;
                            "
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="settings__time">
                  <label
                    class="settings__label settings__label--time"
                    for="seconds"
                    >Секунды</label
                  >
                  <div class="settings__block-time">
                    <input
                      id="seconds"
                      class="settings__input-time border"
                      type="number"
                      v-model="seconds"
                      min="0"
                      max="59"
                      disabled
                    />
                    <div class="settings__col">
                      <button
                        class="settings__btn-time border"
                        type="button"
                        @click="seconds += 5"
                      >
                        <svg
                          class="arrow-up"
                          xmlns="http://www.w3.org/2000/svg"
                          xml:space="preserve"
                          width="30"
                          height="30"
                          style="enable-background: new 0 0 128 128"
                          viewBox="0 0 128 128"
                        >
                          <path
                            d="M111 40.5 64 87.499M64 87.499 17 40.5"
                            style="
                              fill: none;
                              stroke: #c4d1d6;
                              stroke-width: 12;
                              stroke-linecap: square;
                              stroke-miterlimit: 10;
                            "
                          />
                        </svg>
                      </button>
                      <button
                        :disabled="!minutes && seconds <= 5"
                        @click="seconds -= 5"
                        class="settings__btn-time border"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xml:space="preserve"
                          width="30"
                          height="30"
                          style="enable-background: new 0 0 128 128"
                          viewBox="0 0 128 128"
                        >
                          <path
                            d="M111 40.5 64 87.499M64 87.499 17 40.5"
                            style="
                              fill: none;
                              stroke: #c4d1d6;
                              stroke-width: 12;
                              stroke-linecap: square;
                              stroke-miterlimit: 10;
                            "
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button class="settings__btn border" type="submit">Старт</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpySettings',
  data() {
    return {
      numberOfPlayers: 4,
      numberOfSpy: 1,
      minutes: 1,
      seconds: 30
    }
  },
  watch: {
    numberOfPlayers() {
      if (this.numberOfSpy >= this.numberOfPlayers) {
        this.numberOfSpy = this.numberOfPlayers
      }
      if (this.numberOfPlayers < 3) this.numberOfPlayers = 3
    },
    minutes() {
      if (this.minutes < 0) this.minutes = 0
    },
    seconds() {
      if (this.seconds >= 60) {
        this.seconds = 0
        this.minutes += 1
      }

      if (!this.minutes && this.seconds < 5) {
        this.seconds = 5
      }

      if (this.minutes && this.seconds < 0) {
        this.seconds = 55
        this.minutes -= 1
      }
    }
  },
  methods: {
    startGame() {
      this.$store
        .dispatch('players/dataOfPlayers', {
          numberOf: this.numberOfPlayers,
          numberOfSpy: Number(this.numberOfSpy),
          time: {
            minutes: this.minutes,
            seconds: this.seconds
          }
        })
        .then(() => {
          this.$router.push({name: 'start'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.settings {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  &__form {
    width: 100%;
  }

  &__item {
    margin-bottom: 15px;
  }

  &__label {
    display: block;
    text-align: center;
    font-size: 24px;
    margin-bottom: 10px;
    &--time {
      font-size: 18px;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & *:nth-child(-n + 2) {
      margin-right: 5px;
    }
  }

  &__sign {
    max-width: 65px;
    width: 100%;
    height: 65px;
  }

  &__input {
    width: 100%;
    height: 65px;
    text-align: center;
  }

  &__range {
    width: 100%;
  }

  &__btn {
    width: 100%;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  &__title {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
  }

  &__input-time {
    height: 90px;
    max-width: 90px;
    width: 100%;
    text-align: center;
    margin-right: 5px;
  }

  &__block-time {
    display: flex;
  }

  &__col {
    display: flex;
    flex-direction: column;
  }

  &__btn-time {
    height: 42px;
    width: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &__time {
    max-width: 137px;
    width: 100%;
  }
}

.arrow-up {
  transform: rotateZ(180deg);
}
</style>
