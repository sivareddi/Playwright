# Key Differences Between `undefined` and `null` in JavaScript

| Aspect | `undefined` | `null` |
|--------|-------------|--------|
| **Type** | `typeof undefined` → `"undefined"` | `typeof null` → `"object"` |
| **Meaning** | Variable declared but **not assigned** any value | Variable **explicitly assigned** no value (intentional absence) |
| **Default value** | Default value of uninitialized variables | Not a default — must be manually assigned |
| **When it occurs** | • Declared variable with no assignment<br>• Function returns nothing (`return;`)<br>• Accessing non-existent object property<br>• Missing function arguments | • Developer intentionally assigns it<br>• APIs sometimes return `null` for missing objects<br>• `document.getElementById()` when element not found |
| **JSON serialization** | Properties with `undefined` are **omitted** | Properties with `null` are **included** as `"key": null` |
| **Equality** | `undefined == null` → `true` (loose)<br>`undefined === null` → `false` (strict) | `null == undefined` → `true` (loose)<br>`null === undefined` → `false` (strict) |
| **Explicit assignment** | `let x;` (implicitly `undefined`) | `let x = null;` (explicitly set) |
| **Arithmetic** | `undefined + 1` → `NaN` | `null + 1` → `1` |

## Examples

```javascript
// undefined — variable declared but not assigned
let a;
console.log(a);          // undefined
console.log(typeof a);   // "undefined"

// null — explicitly assigned
let b = null;
console.log(b);          // null
console.log(typeof b);   // "object"  (historical JS bug)

// Function with no return
function greet() {}
console.log(greet());    // undefined

// Accessing non-existent property
const obj = { name: "JS" };
console.log(obj.age);    // undefined

// null as intentional empty value
const user = { name: "Alice", address: null };
console.log(user.address); // null

// Equality check
console.log(undefined == null);   // true  (loose equality)
console.log(undefined === null);  // false (strict equality)

// Arithmetic
console.log(undefined + 5);  // NaN
console.log(null + 5);       // 5
```

## Quick Rule of Thumb

- **`undefined`** — JavaScript's way of saying *"I don't know this value yet"*
- **`null`** — Developer's way of saying *"I know this value, and it's intentionally empty"*
