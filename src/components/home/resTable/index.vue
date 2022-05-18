<template>
  <div class="table">
    <el-table
      v-loading="loading"
      :data="data"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="Название"
      >
      </el-table-column>
      <el-table-column
        prop="rgn"
        label="РГН"
        width="120">
      </el-table-column>
      <el-table-column
        prop="district_title"
        label="Округ">
      </el-table-column>
      <el-table-column
        prop="district_okato"
        label="ОКАТО"
        width="120"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      class="table__pagination"
      hide-on-single-page
      :page-size="pagination.perPage"
      :current-page="pagination.currentPage"
      background
      layout="prev, pager, next"
      :total="pagination.total"
      @current-change="paginateTable"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import {defineComponent } from '@vue/composition-api';
import { useResTable } from './composables/useResTable'

export default defineComponent({
  name: 'resTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(_, { root, emit }) {
    const { paginateTable } = useResTable(emit, root)

    return {
      paginateTable
    };
  },
});
</script>

<style scoped lang="scss">
.table {
  &__pagination {
    margin-top: 20px;
  }
}
</style>
