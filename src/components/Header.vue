<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link :to="{name: 'home'}">
          <img class="logo" src="@/assets/images/logo.svg" alt="логотип" />
        </router-link>
        <router-link :to="{name: 'rules'}">
          <h2>правила</h2>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SpyHeader'
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $teal-100;
  padding: 10px 0;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  width: 44px;
  height: 44px;
  & svg {
    fill: $grey-100;
  }
}
</style>
