function Compute() {
    this.lakh = 100000;
    this.cr = 10000000;
    this.th = 1000;
    this.result = 0;
}

Compute.prototype.lacs = function (number) {
    this.result += number * this.lakh;
    return this;
};
Compute.prototype.crore = function (number) {
    this.result += number * this.cr;
    return this;
};
Compute.prototype.thousand = function (number) {
    this.result += number * this.th;
    return this;
};
Compute.prototype.value = function (number) {
    return this.result;
};

const compute = new Compute();

const ans = compute().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
