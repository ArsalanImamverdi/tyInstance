# tyInstance

tyInstance is a instance creator helper in typescript.

## Installing

```
npm install tyinstance
```

## Documentation

Here how to use the package:

### Example 1

```typescript
class ClassToCreate {
  constructor(public value: number, public name?: string) {}
}

class SomeClass {
  constructor() {
    let classToCreate = Instance.create(ClassToCreate, 100, 'Name');
  }
}

class SomeOtherClass {
  constructor() {
    let classToCreate = Instance.create(ClassToCreate, 10);
  }
}
```

### Example 2

```typescript
@Type({ name: 'SomeClassToCreate' })
class ClassToCreate {
  constructor(public value?: number) {}
}

class SomeClass {
  constructor() {
    let classToCreate = Instance.create('SomeClassToCreate', 100);
  }
}
class SomeOtherClass {
  constructor() {
    let classToCreate = Instance.create('SomeClassToCreate');
  }
}
```

### Example 3

```typescript
@Type() // If propery name doesn't pass, then the name of class would be the actual name of class , 'ClassToCreate'
class ClassToCreate {
  constructor(public value?: number) {}
}

class SomeClass {
  constructor() {
    let classToCreate = Instance.create('ClassToCreate', 100);
  }
}
class SomeOtherClass {
  constructor() {
    let classToCreate = Instance.create('ClassToCreate');
  }
}
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ArsalanImamverdi/tyInstance/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **MohamadArsalan Imamverdi** - _Initial work_ - [ArsalanImamverdi](https://github.com/ArsalanImamverdi)

See also the list of [contributors](https://github.com/ArsalanImamverdi/tyInstance/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
