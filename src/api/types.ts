export interface RequestParams {
  title?: string;
  limit?: number;
  start?: number;
  rgn?: string;
  'district_title'?: string;
}

export interface Districts {
  okato: string;
  title: string;
}

export interface TableData {
  id: number;
  title: string;
  rgn: string;
  district_title: string;
  district_okato: string;
}

export interface TableDataResponce {
  data: TableData[];
  count: number;
}
