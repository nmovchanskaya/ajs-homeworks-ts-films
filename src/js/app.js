"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = __importDefault(require("./cart"));
const cart = new cart_1.default();
const movie1 = {
    id: 123,
    name: 'Мстители',
    price: 333,
    name_eng: 'The Avengers',
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assemble',
    genre: 'fantastic',
    duration: 137
};
const movie2 = {
    id: 124,
    name: 'Солярис',
    price: 444,
    name_eng: 'Solaris',
    year: 2002,
    country: 'USA',
    slogan: 'На что ты готов ради второго шанса?',
    genre: 'fantastic',
    duration: 95
};
cart.add(movie1);
cart.add(movie2);
console.log(cart.getAll());
//# sourceMappingURL=app.js.map