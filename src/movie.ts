import type Buyable from './buyable'
export default class Movie implements Buyable {
  id: number
  name: string
  price: number
  name_eng: string
  year: number
  country: string
  slogan: string
  genre: string
  duration: number
  qty?: number

  constructor (
    id: number,
    name: string,
    price: number,
    name_eng: string,
    year: number,
    country: string,
    slogan: string,
    genre: string,
    duration: number,
    qty = 1
  ) {
    this.id = id
    this.name = name
    this.price = price
    this.name_eng = name_eng
    this.year = year
    this.country = country
    this.slogan = slogan
    this.genre = genre
    this.duration = duration
    this.qty = qty
  }
}
