import Cart from './cart'
import type Movie from './movie'

const cart = new Cart()
const movie1: Movie = {
  id: 123,
  name: 'Мстители',
  price: 345,
  name_eng: 'The Avengers',
  year: 2012,
  country: 'USA',
  slogan: 'Avengers Assemble',
  genre: 'fantastic',
  duration: 137
}

const movie2: Movie = {
  id: 124,
  name: 'Солярис',
  price: 355,
  name_eng: 'Solaris',
  year: 2002,
  country: 'USA',
  slogan: 'На что ты готов ради второго шанса?',
  genre: 'fantastic',
  duration: 95
}
//test

cart.add(movie1);
cart.add(movie2);
console.log(cart.getAll())
console.log(cart.getSum())
console.log(cart.getSumDiscounted(20))
cart.deleteItem(124)
console.log(cart.getAll())
