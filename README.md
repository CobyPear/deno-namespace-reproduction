# Minimal reproduction: Namespace not exported from d.ts file

**Expected**: The test should pass

**Actual**: The test fails with the following error:

```sh
./main_test.ts (uncaught error)
error: SyntaxError: The requested module './types.d.ts' does not provide an export named 'MyNamespace'
import { MyNamespace } from "./types.d.ts";
         ^
    at <anonymous> (file:///Users/cobysher/oss/deno-namespace-reproduction/main.ts:1:10)
This error was not caught from a test and caused the test runner to fail on the referenced module.
It most likely originated from a dangling promise, event/timeout handler or top-level code.
```