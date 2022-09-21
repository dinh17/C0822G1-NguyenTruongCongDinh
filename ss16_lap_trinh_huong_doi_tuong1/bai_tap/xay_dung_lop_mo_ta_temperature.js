class Temperature {
    constructor(doC) {
        this.doC = doC;
    }

    getDoCSangDoF() {
        return (this.doC / 5 * 9) + 32;
    }

    getDoCSangDoKevin() {
        return (this.doC + 273.15);
    }
}

let changeTemperature = new Temperature(25);


document.write("Nhiet do F : " + changeTemperature.getDoCSangDoF() + "<br>");
document.write("NHiet do K : " + changeTemperature.getDoCSangDoKevin());
