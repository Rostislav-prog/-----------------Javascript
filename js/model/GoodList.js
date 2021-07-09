"use strict";

import Good from "./Good.js";

export default class GoodList {
    constructor(goods) { // функция конструктор, принимает каталог товаров (массив)
        this.goods = goods.map(item => new Good(item));
    }

    get() { //метод возвращает товары
        return this.goods;
    }

    add(good) { // метод принимает товар и добавляет его в массив
        this.goods.push(good);
    }

    remoove(id) { // метод принимает id , выполняет поиск товара с этим id и удаляет его из массива
        const index = this.goods.findIndex(good => good.id === id);// findIndex - перебирающий метод
        this.goods.splice(index, 1); // удаляем товар с id
    }
}

