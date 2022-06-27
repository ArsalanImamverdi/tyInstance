import { Instance } from "../src/instance";
import { ClassWithConstructor, ClassWithConstructorAndTypeDecoratorWithName, ClassWithConstructorAndTypeDecoratorWithOutName, ClassWithoutConstructor, ClassWithOutConstructorAndTypeDecoratorWithName, ClassWithOutConstructorAndTypeDecoratorWithOutName } from "./classes";

describe('Instance tests', () => {
    it('should create instance of ClassWithConstructor', () => {
        let instance = Instance.create(ClassWithConstructor, 10);
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(10);
    });

    it('shold create instance if ClassWithoutConstructor', () => {
        let instance = Instance.create(ClassWithoutConstructor);
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(100);
    });

    it('should create instance of ClassWithConstructorAndTypeDecoratorWithName', () => {
        let instance = Instance.create<ClassWithConstructorAndTypeDecoratorWithName>('Class1', 100);
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(100);
    });

    it('should create instance of ClassWithConstructorAndTypeDecoratorWithOutName', () => {
        let instance = Instance.create<ClassWithConstructorAndTypeDecoratorWithOutName>('ClassWithConstructorAndTypeDecoratorWithOutName', 1000);
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(1000);
    });

    it('should create instance of ClassWithOutConstructorAndTypeDecoratorWithName', () => {
        let instance = Instance.create<ClassWithOutConstructorAndTypeDecoratorWithName>('Class2');
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(100);
    });

    it('should create instace of ClassWithOutConstructorAndTypeDecoratorWithOutName', () => {
        let instance = Instance.create<ClassWithOutConstructorAndTypeDecoratorWithOutName>('ClassWithOutConstructorAndTypeDecoratorWithOutName');
        expect(instance).not.toBeNull();
        expect(instance).not.toBeUndefined();
        expect(instance.a).toBe(100);
    });

    it('should throw exception when no type found by string', () => {
        try {
            let instace = Instance.create('someNotRegisteredClass');
            expect(1).toBe(2);
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toBe('can not find type with name \'someNotRegisteredClass\', please add Type decorator to class');
        }
    });

});