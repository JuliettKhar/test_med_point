<template>
  <el-form :model="formData" label-position="top" class="filter-form">
    <el-form-item label="Название дороги">
      <el-input v-model="formData.roadName"></el-input>
    </el-form-item>
    <el-form-item label="РГН">
      <el-input v-model="formData.rgn"></el-input>
    </el-form-item>
    <el-form-item label="Городской округ">
      <el-select
        v-model="formData.district"
        placeholder="Выберите из списка"
        class="filter-form__select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';

export default defineComponent({
  name: 'FilterForm',
  setup() {
    const formData = reactive({
      roadName: '',
      rgn: '',
      district: '',
    });

    return {
      formData,
    };
  },
});
</script>

<style scoped lang="scss">
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
