<template>
  <section class="home">
    <div class="container">
      <div class="home__inner">
        <div class="home__box">
          <div class="home__text">
            <h1 class="home__title">Добро пожаловать в игру шпион</h1>
            <p class="home__choose">выберите тип игры:</p>
          </div>
          <ul class="home__links">
            <li class="home__link">
              <router-link class="home__router-link" :to="{name: 'locations'}"
                >Места</router-link
              >
            </li>
            <li class="home__link">
              <router-link class="home__router-link" :to="{name: 'professions'}"
                >Профессии</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpyHome'
}
</script>

<style lang="scss" scoped>
.home {
  &__inner {
    min-height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__box {
    text-align: center;
  }

  &__title {
    font-size: 30px;
    margin-bottom: 10px;
  }

  &__choose {
    font-size: 20px;
    margin-bottom: 15px;
  }

  &__links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }

  &__link {
    z-index: 10;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 5px;
      left: 3px;
      top: 3px;
      background-color: $teal-200;
      z-index: -1;
    }
  }

  &__router-link {
    display: block;
    border: 1px solid $grey-300;
    background-color: $teal-200;
    border-radius: 5px;
    padding: 5px 10px;
    width: 140px;
    z-index: 20;
    position: relative;
    left: 0;
    top: 0;
    transition: left 0.1s, top 0.1s;

    &:active {
      left: 2px;
      top: 2px;
    }
  }
}
</style>
