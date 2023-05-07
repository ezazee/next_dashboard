interface IColor {
  name: string;
  color_hash: string;
}

export interface IShoes {
  id: string;
  image: string;
  name: string;
  category: string;
  description: string;
  price: number;
  sizes: string[];
  colors: IColor[];
  video: string;
}