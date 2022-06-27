import { Type } from "./type";

export class Instance {
    public static types: { name: string, type: Type<any> }[] = [];

    /**
     * Create instance using the name of the class
     * @remarks
     * To use this function, the class should be decorated by {@link Type}
     * If the property `name` of the  {@link Type} provided, this would look for this name for object creation, otherwise it will use the nameof class itself
     * 
     * @param name - the name of the class
     * @template TInstance the type of return instance
     * @return The created instance of passed name
     */
    public static create<TInstance = any>(name: string): TInstance;

    /**
    * Create instance using the name of the class
    * @remarks
    * To use this function, the class should be decorated by {@link Type}
    * If the property `name` of the  {@link Type} provided, this would look for this name for object creation, otherwise it will use the nameof class itself
    * 
    * @param name - the name of the class
    * @param args - class constrcutor arguments
    * @template TInstance the type of return instance
    * @return The created instance of passed name
    */
    public static create<TInstance = any>(name: string, ...args: any[]): TInstance;

    /**
     * Create instance using the type of the class
     * 
     * @param type - the Type of the class
     * @template TInstance the type of return instance
     * @return The created instance of passed type
     */
    public static create<TInstance>(type: Type<TInstance>): TInstance;

    /**
    * Create instance using the type of the class
    * 
    * @param type - the name of the class
    * @param args - class constrcutor arguments
    * @template TInstance the type of return instance
    * @return The created instance of passed type
    */

    public static create<TInstance>(type: Type<TInstance>, ...args: any[]): TInstance;
    public static create<T>(nameOrType: string | Type<T>, ...args: any[]): T {
        if (typeof nameOrType == 'string') {
            let type = Instance.types.find(item => item.name == nameOrType);
            if (!type) throw new Error(`can not find type with name '${nameOrType}', please add 'Type' decorator to class`);
            return new type.type(...args);
        }
        else
            return new nameOrType(...args);
    }

}