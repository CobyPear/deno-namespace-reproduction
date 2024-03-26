import { MyNamespace } from "./types.d.ts";


export class MyClass extends MyNamespace.MyClass {
  returnString(): string {
    return "Hello, World!";
  }

  returnBoolean(): boolean {
    return true;
  }
}