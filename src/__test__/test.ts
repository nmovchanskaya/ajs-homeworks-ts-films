import Cart from '../cart';
import type Movie from '../movie';
import Buyable from '../buyable';

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
cart.add(movie1)
cart.add(movie2)

test('getAll', () => {
  const expected = [
    {
      id: 123,
      name: 'Мстители',
      price: 345,
      name_eng: 'The Avengers',
      year: 2012,
      country: 'USA',
      slogan: 'Avengers Assemble',
      genre: 'fantastic',
      duration: 137
    },
    {
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
  ]
  const items = cart.getAll()
  expect(items).toEqual(expected)
});

//task 2
test('getSum', () => {
  const sum = cart.getSum();
  expect(sum).toBe(700);
})

test('getSumDiscounted', () => {
  const sum = cart.getSumDiscounted(20);
  expect(sum).toBe(560);
})

test('getSumDiscounted negative discount', () => {
  const sum = cart.getSumDiscounted(-3);
  expect(sum).toBe(700);
})

test('getSumDiscounted discount over 100', () => {
  const sum = cart.getSumDiscounted(120);
  expect(sum).toBe(0);
})

test('deleteItem', () => {
  const expected = [
    {
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
  ];
  cart.deleteItem(124)
  expect(cart.getAll()).toEqual(expected);
})

test('deleteItem not from list', () => {
  cart.deleteItem(124)
  expect(cart.getAll().length).toBe(1);
})

//task 3
test('test getSum with some qty of gadgets', () => {
  const gadget: Buyable = {
    id: 125,
    name: 'iPhone',
    price: 1000,
    qty: 10
  }
  cart.add(gadget);

  const sum = cart.getSum();
  expect(sum).toBe(10345);
})

test('test minus', () => {
  cart.minusItem(125);

  const sum = cart.getSum();
  expect(sum).toBe(9345);
})

test('test minus not exists', () => {
  cart.minusItem(126);

  const sum = cart.getSum();
  expect(sum).toBe(9345);
})

test('test plus', () => {
  cart.plusItem(125);

  const sum = cart.getSum();
  expect(sum).toBe(10345);
})
