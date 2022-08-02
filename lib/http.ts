import axios from "axios";

import { BookProps } from "const";

export async function fetchBooks(
  page: number,
  size: number,
  type: any
): Promise<{ content: BookProps[]; total: number }> {
  const setTimeoutPromise = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  await setTimeoutPromise(3000);
  return {
    content: [
      {
        id: "2590736225",
        title: "Gregoria Macejkovic",
        type: "ScienceTechnology",
        publishedAt: "1953-02-14T01:02:00.000Z",
        // stock: 438,
        stock: 4,
        price: "10.07",
        authors: [
          {
            author: {
              id: "2960260761",
              name: "Stacey Jacobi",
            },
          },
        ],
        averageRating: 1.4762,
        ratings: 21,
      },
      {
        id: "3500858745",
        title: "Loren Turner",
        type: "ScienceTechnology",
        publishedAt: "2009-06-02T01:25:08.000Z",
        stock: 542,
        price: "11.36",
        authors: [
          {
            author: {
              id: "1776028097",
              name: "Mack Collins",
            },
          },
        ],
        averageRating: 2.1667,
        ratings: 6,
      },
      {
        id: "1919446286",
        title: "Karlee Cummerata",
        type: "ScienceTechnology",
        publishedAt: "2001-06-26T05:12:26.000Z",
        stock: 481,
        price: "11.55",
        authors: [
          {
            author: {
              id: "289290766",
              name: "Orrin McClure",
            },
          },
        ],
        averageRating: 2.25,
        ratings: 12,
      },
      {
        id: "3686723979",
        title: "Kamryn Jast",
        type: "ScienceTechnology",
        publishedAt: "1945-07-27T08:02:04.000Z",
        stock: 173,
        price: "11.55",
        authors: [
          {
            author: {
              id: "1176147169",
              name: "Sherwood Reichel",
            },
          },
        ],
        averageRating: 2.5833,
        ratings: 12,
      },
      {
        id: "385309869",
        title: "Rosemarie Koch",
        type: "ScienceTechnology",
        publishedAt: "1904-07-16T05:11:18.000Z",
        stock: 889,
        price: "11.56",
        authors: [
          {
            author: {
              id: "3583506770",
              name: "Blake McGlynn",
            },
          },
        ],
        averageRating: 2.4167,
        ratings: 24,
      },
      {
        id: "2690727747",
        title: "Dax Herman",
        type: "ScienceTechnology",
        publishedAt: "1972-10-27T03:40:02.000Z",
        stock: 252,
        price: "11.98",
        authors: [
          {
            author: {
              id: "3931608606",
              name: "Malvina Schroeder",
            },
          },
        ],
        averageRating: 3.2857,
        ratings: 14,
      },
      {
        id: "1839839047",
        title: "Dustin Auer",
        type: "ScienceTechnology",
        publishedAt: "1981-09-17T04:42:33.000Z",
        stock: 606,
        price: "12",
        authors: [
          {
            author: {
              id: "1963823164",
              name: "Thora Considine",
            },
          },
        ],
        averageRating: 2.6111,
        ratings: 18,
      },
      {
        id: "2556011605",
        title: "Adan Bode",
        type: "ScienceTechnology",
        publishedAt: "1915-04-18T01:48:08.000Z",
        stock: 758,
        price: "12.51",
        authors: [
          {
            author: {
              id: "2219760838",
              name: "Ethel Runolfsson",
            },
          },
        ],
        averageRating: 2.5333,
        ratings: 15,
      },
      {
        id: "2404592100",
        title: "Guiseppe Kemmer",
        type: "ScienceTechnology",
        publishedAt: "1996-12-06T12:06:39.000Z",
        stock: 107,
        price: "12.54",
        authors: [
          {
            author: {
              id: "1041082109",
              name: "Vernice Weimann",
            },
          },
        ],
        averageRating: 3.3125,
        ratings: 16,
      },
      {
        id: "1758681721",
        title: "Carole Sawayn",
        type: "ScienceTechnology",
        publishedAt: "1968-11-27T04:48:56.000Z",
        stock: 209,
        price: "12.54",
        authors: [
          {
            author: {
              id: "701742215",
              name: "Nayeli Hayes",
            },
          },
        ],
        averageRating: 3.6667,
        ratings: 12,
      },
    ],
    total: 2017,
  };
}
