import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";
import { MyClass } from "./main.ts";

Deno.test(function addTest() {
  const myClass = new MyClass();
  assertEquals(myClass.returnString(), "Hello, World!");
});
