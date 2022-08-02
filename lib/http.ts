import axios from "axios";

export async function fetchBooks(page: number, size: number, type: any) {
  const setTimeoutPromise = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(3000);
  return [
    {
      id: page,
      title: `Book Title ${page}`,
      type: "mock",
      price: 20.4,
      avgRatings: 3.1,
    },
  ];
}
