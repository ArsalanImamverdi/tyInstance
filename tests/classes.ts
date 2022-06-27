import { Type } from "../src/typeDec";

export class ClassWithConstructor {
    constructor(public a: number) { }
}

export class ClassWithoutConstructor {
    a: number;
    constructor() {
        this.a = 100;
    }
}

@Type({ name: 'Class1' })
export class ClassWithConstructorAndTypeDecoratorWithName {
    constructor(public a: number) { }
}

@Type()
export class ClassWithConstructorAndTypeDecoratorWithOutName {
    constructor(public a: number) { }
}


@Type({ name: 'Class2' })
export class ClassWithOutConstructorAndTypeDecoratorWithName {
    a: number;
    constructor() {
        this.a = 100;
    }
}

@Type()
export class ClassWithOutConstructorAndTypeDecoratorWithOutName {
    a: number;
    constructor() {
        this.a = 100;
    }
}

