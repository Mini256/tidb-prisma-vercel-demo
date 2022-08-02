export type AuthorType = {
  id: string;
  name: string;
};

export interface BookProps {
  id: string;
  title: string;
  type: string;
  publishedAt: string;
  stock: number;
  price: string;
  authors: { author: AuthorType }[];
  averageRating: number;
  ratings: number;
}

export interface shoppingCartItemProps extends BookProps {
  quantity: number;
}
