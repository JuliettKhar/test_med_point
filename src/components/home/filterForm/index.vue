<template>
  <el-form
    ref='filterForm'
    :model='formFilters'
    :rules='rules'
    label-position='top'
    class='filter-form'
  >
    <el-form-item label='Название дороги' prop='title'>
      <el-input
        v-model.trim='formFilters.title'
        clearable
        @keyup.enter.native="validateField('title')"
        @clear='clearFilter'
      />
    </el-form-item>
    <el-form-item label='РГН' prop='rgn'>
      <el-input
        v-model.trim='formFilters.rgn'
        clearable
        @keyup.enter.native="validateField('rgn')"
        @clear='clearFilter' />
    </el-form-item>
    <el-form-item label='Городской округ' prop='district_title'>
      <el-select
        v-model.trim='formFilters.district_title'
        placeholder='Выберите из списка'
        class='filter-form__select'
        clearable
        @change="validateField('district_title')"
        @clear='clearFilter'
      >
        <el-option
          v-for='item in districts'
          :key='item.okato'
          :label='item.title'
          :value='item.title'>
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang='ts'>
import {
  defineComponent,
} from '@vue/composition-api';
import { rules } from '@/utils/formValidationRules';
import { useFilters } from './composables/useFilters';

export default defineComponent({
  name: 'FilterForm',
  setup(_, { root, emit }) {
    const {
      formFilters,
      filterForm,
      districts,
      validateField,
      clearFilter,
    } = useFilters(emit, root);

    return {
      formFilters,
      filterForm,
      rules,
      districts,
      validateField,
      clearFilter,
    };
  },
});
</script>

<style scoped lang='less'>
.filter-form {

  &__select {
    width: 100%;
  }
}

::v-deep .el-form-item__label {
  width: 100%;
  line-height: 20px;
}
</style>
