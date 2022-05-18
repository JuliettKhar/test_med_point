import {
  reactive, onMounted, ref, computed,
} from '@vue/composition-api';
import apiService from '@/api';
import { Notification } from 'element-ui';
import { RequestParams, TableData, TableDataResponce } from '@/api/types';

export function useHomeView(routeQuery: any) {
  const tableData = ref<TableData[]>([]);
  const tableLoader = ref(false);
  const pagination = reactive({
    total: 0,
    perPage: 8,
    currentPage: Number(routeQuery.page) || 1,
  });
  const reqParams = computed(() => ({
    start: pagination.currentPage - 1,
    limit: pagination.perPage,
  }));

  const getTableData = async (params: RequestParams): Promise<void> => {
    try {
      tableLoader.value = true;
      const {
        data,
        count,
      } = await apiService.getApiDataByParams(params) as unknown as TableDataResponce;

      tableData.value = data as unknown as TableData[];
      pagination.total = count;
    } catch (e) {
      Notification.error(e);
    } finally {
      tableLoader.value = false;
    }
  };

  const changePage = (page: number) => {
    pagination.currentPage = page;
    getTableData({ ...reqParams.value });
  };

  const resetFilter = () => getTableData({ ...reqParams.value });

  const getField = (filters: Record<string, any>) => getTableData({
    ...reqParams.value,
    ...filters,
    start: 0,
  });

  onMounted(() => getTableData({ ...reqParams.value }));

  return {
    tableData,
    pagination,
    tableLoader,
    getField,
    resetFilter,
    changePage,
  };
}
