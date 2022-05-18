<template>
  <el-container id="app" class="app">
    <app-header/>
    <el-main class="app-main">
      <router-view/>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AppHeader from '@/components/layout/header/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
  },
});
</script>

<style lang="less">
html {
  display: flex;
  height: 100vh;
  font-size: 14px;
}

body {
  width: 100%;
  background: lightgray;
  margin: 0;
  padding: 20px;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="less">
.app-main {
  padding: 20px 0 !important;
  overflow-x: hidden !important;
}
</style>
