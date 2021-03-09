function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

function WithTempate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@Logger
@WithTempate("Over here", "app")
class Person {
  public name: string;

  constructor() {
    console.log("Creating person object...");
    this.name = "Max";
  }
}

const pers = new Person();

class Product {
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Price! Price should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
