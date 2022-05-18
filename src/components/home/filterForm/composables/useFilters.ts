import { reactive, onMounted, ref } from '@vue/composition-api';
import apiService from '@/api';
import {Form} from 'element-ui/types/element-ui';
import {Districts} from '@/api/types';
import {Notification} from 'element-ui'

export function useFilters(
  emit:  (event: string, ...args: any[]) => void,
  root: any
) {
  const formFilters = reactive<{[key: string]: null | string}>({
    title: null,
    rgn: null,
    'district_title': null,
  });
  const districts = ref<Districts[]>([])
  const filterForm = ref<Form | null>(null);

  const updateQuery = () => {
    if (root.$route.query?.page !== '1') {
     root.$router.push({ query: { page: String(1) }})
    }
  }

  const validateField = (fieldName: string) => {
    updateQuery()
    filterForm.value?.validateField(fieldName, (err) =>{
      if (!err) { emit('valid', formFilters) }
    })
  }

  const clearFilter =() => {
    filterForm.value?.resetFields()
    emit('reset')
  }

  const getDistrictsData = async (): Promise<void> => {
    try {
      const {data} = await apiService.getDistricts();
      districts.value = data
    } catch (e) {
      Notification.error(e)
    }
  };

  onMounted(() => getDistrictsData());

  return {
    formFilters,
    filterForm,
    districts,
    validateField,
    clearFilter
  };
}
