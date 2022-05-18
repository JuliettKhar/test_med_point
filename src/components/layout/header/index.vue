<template>
  <el-header class="app-header" height="auto">
    <div class="app-header__avatar-wrapper">
      <el-avatar :size="70" :src="imgUrl"/>
      <div class="app-header__title-wrapper">
        <h1>Название компании</h1>
        <p>Слоган компании</p>
      </div>
    </div>
    <div class="app-header__login-btn">
      <h3>Ф.И.О.</h3>
      <el-button icon="el-icon-user"/>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'AppHeader',
  setup() {
    const imgUrl = 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png';

    return {
      imgUrl,
    };
  },
});
</script>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 10px 20px;
  border-radius: 6px;

  &__title-wrapper {
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      margin: 0 0 10px;
      line-height: 12px;
      font-size: 18px;
      text-align: start;

      @media (max-width: 992px) {
        font-size: 15px;
        word-break: break-word;
      }
    }

    p {
      margin: 0;

      @media (max-width: 992px) {
        display: none;
      }
    }
  }

  &__avatar-wrapper {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  &__login-btn {
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
