import { array } from 'yargs'
import type Buyable from './buyable'
export default class Cart {
  private readonly items: Buyable[] = []

  add (item: Buyable): void {
    this.items.push(item)
  }

  getAll (): Buyable[] {
    return [...this.items]
  }

  getSum (): number {
    let sum = 0
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].qty !== undefined) {
        sum += this.items[i].price * this.items[i].qty!
      } else {
        sum += this.items[i].price
      }
    }
    return sum
  }

  // discount in procents
  getSumDiscounted (discount: number): number {
    if (discount >= 100) {
      return 0
    }
    const sum = this.getSum()
    if (discount <= 0) {
      return sum
    }
    // other cases
    return sum - sum * discount / 100
  }

  deleteItem (id: number): void {
    const idx = this.items.findIndex((item) =>
      item.id === id
    )
    if (idx > -1) {
      this.items.splice(idx, 1)
    }
  }

  minusItem (id: number): void {
    const idx = this.items.findIndex((item) =>
      item.id === id
    )
    if (idx > -1 && this.items[idx].qty !== undefined) {
      if (this.items[idx].qty! > 0) {
        this.items[idx].qty!--
      }
    }
  }

  plusItem (id: number): void {
    const idx = this.items.findIndex((item) =>
      item.id === id
    )
    if (idx > -1 && this.items[idx].qty !== undefined) {
      this.items[idx].qty!++
    }
  }
}
