"use strict";

import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor({ title, description, image, price, discount }) { // функция добавляет к товару уникальный id
        this.title = title;
        this.description = description;
        this.image = image;
        this._price = price;
        this._discount = discount;
        this.id = idGenerator();
    }

    getPrice() { // цена на товар со скидкой (если скидка имеется)
        return this._price - this._discount;
    }
}