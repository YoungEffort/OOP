// es6实现抽象类继承：1、用class定义抽象父类 2、用class定义抽象子类，用extends和super实现继承
class Flyer {
    constructor(sname, age) {
        this.sname = sname;
        this.age = age
    }
    fly(name) {
        this.name = name;
    }
    hello() {
        console.log("hello")
    }
}
class Plane extends Flyer {
    constructor(name, sname, age) {
        super(sname, age);
        this.name = name;
    }
    getScore(score) {
        this.score = score;
    }
}

var a = new Plane("qw", "er", 18)