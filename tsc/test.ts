class Base {
  name: string
  constructor() {
    this.name = this.constructor.name
  }
}

class SomeThing extends Base {
  constructor() {
    super()
  }
}

let thing1: Base = new SomeThing()

console.log(thing1.name)