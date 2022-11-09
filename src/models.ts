export interface IResourceBase {
  id: number
  title: string
}

export interface IProduct extends IResourceBase {
  brand: string
  category: string
  description: string
  discountPercentage: number,
  images: Array<string>
  rating: number,
  stock: number,
  thumbnail: string,
  price: number
}
