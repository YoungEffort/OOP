// es5实现抽象类继承：1、定义抽象父类 2、定义抽象子类（子类构造函数和原型对象分别继承父类）---核心是this的指向，最终抽象子类的this都指向子类
function Flyer(sname, age) {
    this.sname = sname;
    this.age = age;
};
Flyer.prototype = {
    fly: function (name) {
        this.name = name;
    },
    hello: function () {
        console.log("hello")
    }
}

function Plane(name, sname, age) {
    // 修改Flyer的this指向Plane（合理利用this）
    Flyer.call(this, sname, age);
    this.name = name;
}
// 子原型对象继承父原型对象
Plane.prototype = Flyer.prototype;
Plane.prototype.getScore = function (score) {
    this.score = score;
}

var a = new Plane("qw", "er", 18)