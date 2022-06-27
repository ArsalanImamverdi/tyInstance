import { ClassDecoratorDescriptor, IClassDecorator, tyDec } from 'tydec';
import { Instance } from './instance';
import { Type as TheType } from './type'

interface Type {
    name: string;
}

class TypeDecoratorDescriptor extends ClassDecoratorDescriptor<Type>{
    implement(target: TheType<any>, arg: Type) {
        let name = arg ? arg.name : target.name;
        let type = Instance.types.find(item => item.name == name);
        if (type) throw new Error(`type with name '${name}' already registered!`);
        Instance.types.push({ name: name, type: target });
    }
}

export const Type: IClassDecorator<Type> = tyDec.create(TypeDecoratorDescriptor);
