export interface ICache<T> {
  timestamp: number;
  key: string;
  content: T
}


export interface ITopSearch {
  key: string;
  count: number;
}
