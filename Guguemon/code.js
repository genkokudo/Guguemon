"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 型定義
const isDone = false;
const height = 6;
const bob = "bob";
const list1 = [1, 2, 3];
const list2 = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c = Color.Green;
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
function showMessage(data) {
    // Void
    Logger.log(data);
}
showMessage("hello");
// クラス
class Hamburger {
    constructor() {
        // コンストラクタ
    }
    listToppings() {
        // メソッド
    }
}
// テンプレート文字列
const name = "Sam";
const age = 42;
console.log(`hello my name is ${name}, and I am ${age} years old`);
// Rest arguments
const add = (a, b) => a + b;
const args = [3, 5];
add(args[0], args[1]);
// same as `add.apply(null, args)`
// スプレッド構文 (array)
const cde = ["c", "d", "e"];
const scale = ["a", "b", ...cde, "f", "g"]; // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// スプレッド構文 (map)
const mapABC = { a: 5, b: 6, c: 3 };
const mapABCD = Object.assign({}, mapABC, { d: 7 }); // { a: 5, b: 6, c: 3, d: 7 }
// 分割代入
const jane = { firstName: "Jane", lastName: "Doe" };
const john = { firstName: "John", lastName: "Doe", middleName: "Smith" };
function sayName({ firstName, lastName, middleName = "N/A" }) {
    console.log(`Hello ${firstName} ${middleName} ${lastName}`);
}
sayName(jane); // -> Hello Jane N/A Doe
sayName(john); // -> Helo John Smith Doe
// Export (The export keyword is ignored)
exports.pi = 3.141592;
// Google Apps Script の独自サービスの利用
const doc = DocumentApp.create("Hello, world!");
doc
    .getBody()
    .appendParagraph("This document was created by Google Apps Script.");
// デコレータ（高階関数）
function Override(label) {
    return (target, key) => {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    };
}
class Test {
    constructor() {
        this.name = "pat";
    }
}
__decorate([
    Override("test") // invokes Override, which returns the decorator
], Test.prototype, "name", void 0);
const t = new Test();
console.log(t.name); // 'test'
//# sourceMappingURL=code.js.map