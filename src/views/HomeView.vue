<template>
  <el-row class="home" :gutter="20">
    <el-col :md="8">
      <div class="home__filters">
        <filter-form/>
      </div>
    </el-col>
    <el-col :md="16">
      <div class="home__results">
        <res-table/>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FilterForm from '../components/home/filterForm/index.vue';
import ResTable from '../components/home/resTable/index.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FilterForm,
    ResTable,
  },
});
</script>
<style scoped lang="scss">
.home {
  display: flex;
  height: 100%;
  flex-wrap: wrap;

  @media (max-width: 992px){
    & div:first-child {
      margin-bottom: 20px;
    }
  }

  &__filters,
  &__results {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
  }

  &__filters {

  }

  &__results {

  }
}
</style>
