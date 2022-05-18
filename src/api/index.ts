import axios from '@/plugins/axios';
import { AxiosResponse } from 'axios';
import { RequestParams, Districts, TableDataResponce } from '@/api/types';

export default class apiService {
  public static getApiDataByParams(params: RequestParams)
    : Promise<AxiosResponse<TableDataResponce>> {
    return axios.get('/api/data', { params });
  }

  public static getDistricts(): Promise<AxiosResponse<Districts[]>> {
    return axios.get('/api/districts');
  }
}
