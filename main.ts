class GenericsValue<T> {
    value: T;
    constructor(arg: T) {
        this.value = arg;
    }
    getValue(): T {
        return this.value;
    }
}
let genericsValue = new GenericsValue<number>(123);
console.log(genericsValue.getValue()); // 出力: 123
let genericsValueString = new GenericsValue<string>("Hello, Generics!");
console.log(genericsValueString.getValue()); // 出力: Hello, Generics!
