<template>
  <el-row class="home" :gutter="20">
    <el-col :md="8">
      <div class="home__filters">
        <filter-form @valid="getField" @reset="resetFilter"/>
      </div>
    </el-col>
    <el-col :md="16">
      <div class="home__results">
        <res-table
          :data="tableData"
          :pagination="pagination"
          :loading="tableLoader"
          @pagination="changePage"
        />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FilterForm from '../components/home/filterForm/index.vue';
import ResTable from '../components/home/resTable/index.vue';
import { useHomeView } from '../components/home/composables/useHomeView';

export default defineComponent({
  name: 'HomeView',
  components: {
    FilterForm,
    ResTable,
  },
  setup(_, { root }) {
    const {
      tableData,
      getField,
      pagination,
      tableLoader,
      resetFilter,
      changePage,
    } = useHomeView(root.$route.query);

    return {
      tableData,
      pagination,
      tableLoader,
      getField,
      resetFilter,
      changePage,
    };
  },
});
</script>
<style scoped lang="less">
.home {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  margin-bottom: 0;

  @media (max-width: 991px){
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
}
</style>
