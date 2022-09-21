class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return (this.width + this.height) * 2;
    }

}

let myRectangle = new Rectangle(200, 100);
let width = myRectangle.getWidth();
let height = myRectangle.getHeight();
//
myRectangle.setWidth(300);
myRectangle.setHeight(150);

document.write("dien tich" + myRectangle.getArea() + "<br>");
document.write("chu vi " + myRectangle.getPerimeter());


let canvas = document.getElementById("demoCanvas");
let ctx = canvas.getContext('2d');
ctx.fillStyle = '#fa4b2a';
ctx.fillRect(50, 50, width, height);