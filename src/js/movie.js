"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(id, name, price, name_eng, year, country, slogan, genre, duration, qty = 1) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.name_eng = name_eng;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
        this.qty = qty;
    }
}
exports.default = Movie;
//# sourceMappingURL=movie.js.map