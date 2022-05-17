import axios from '@/plugins/axios';
import { AxiosResponse } from 'axios';
import { RequestParams } from '@/api/types';

export default class apiService {
  public static getApiDataByParams(params: RequestParams): Promise<AxiosResponse> {
    return axios.get('/api/data', { params });
  }
}
