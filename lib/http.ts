import axios, { AxiosResponse } from "axios";

import { BookProps } from "const";

export async function fetchBooks(data: {
  page?: number;
  size?: number;
  type?: string;
  sort?: string;
}): Promise<{ content: BookProps[]; total: number; error?: any }> {
  try {
    const queryArray = Object.keys(data).reduce((prev: string[], item) => {
      const value = data[item as keyof typeof data];
      if (value) {
        prev.push(`${item}=${value}`);
      }
      return prev;
    }, []);
    const response = await axios.get(`/api/books?${queryArray.join(`&`)}`);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return { error, content: [], total: 0 };
  }
}

export async function fetchBookTypes(): Promise<{
  content: string[];
  error?: any;
}> {
  try {
    const response = await axios.get(`/api/books/types`);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data as string[] };
  } catch (error) {
    console.error(error);
    return { error, content: [] };
  }
}
