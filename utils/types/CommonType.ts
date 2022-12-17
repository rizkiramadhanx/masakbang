export type ResponseApiCommon<T> = {
  method: string;
  status: boolean;
  results: Array<T>;
};
