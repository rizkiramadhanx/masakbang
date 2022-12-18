export type ResponseApiCommon<T> = {
  method: string;
  status: boolean;
  results: Array<T>;
};

export type ResponseApiCommonSingle<T> = {
  method: string;
  status: boolean;
  results: T;
};
