# Loops in JavaScript

**Example file:** `09_chapter_Loops/52_loop.js`

---

## Comparison Table

| Aspect | `for` Loop | `while` Loop | `do...while` Loop |
|---|---|---|---|
| **Syntax** | `for (init; condition; update) { }` | `while (condition) { }` | `do { } while (condition);` |
| **When to use** | When you know **exactly how many times** to iterate. | When you want to repeat **while a condition is true**, and the count is unknown. | When the block **must run at least once** regardless of the condition. |
| **Example from file** | `for (i = 0; i < 10; i++) { console.log(i); }` | `while (b < 10) { console.log(b); b++; }` | `do { console.log(a); a++; } while (a < 10);` |
| **ICU (Init-Condition-Update)** | ✅ All three are in one line. | ❌ No init/update — only condition. | ❌ No init/update — only condition. |
| **Condition check** | **At the beginning** — check before each iteration. | **At the beginning** — check before each iteration. | **At the end** — check after running the block once. |
| **Minimum executions** | 0 (condition may be false from the start). | 0 (condition may be false from the start). | **1** (runs the block first, then checks condition). |
| **Variable scope** | `let i` inside `for ()` is block-scoped to the loop. | Loop variable (`b`) is declared **before** the loop. | Loop variable (`a`) is declared **before** the loop. |

---

## Execution Flow Diagrams

### `for` Loop
```
i = 0  ──▶  i < 10? ──▶  console.log(i) ──▶  i++ ──▶  i < 10? ──▶  ... ──▶  i = 10 → stop
     (init)      (check)        (body)         (update)       (check)
```

### `while` Loop
```
b = 1 ──▶  b < 10? ──▶  console.log(b) ──▶  b++ ──▶  b < 10? ──▶  ... ──▶  b = 10 → stop
         (check)            (body)         (update)      (check)
```

### `do...while` Loop
```
a = 1 ──▶  console.log(a) ──▶  a++ ──▶  a < 10? ──▶  console.log(a) ──▶  ... ──▶  a = 10 → stop
           (body first!)       (update)      (check)
```

---

## Output from `52_loop.js`

```
FOR LOOP FROM HERE:
0 1 2 3 4 5 6 7 8 9
DO WHILE FROM HERE:
1 2 3 4 5 6 7 8 9
value of a is:  10
While Loop FROM HERE:
value of a is:  1
value of a is:  2
... up to
value of a is:  9
```

---

## Key Takeaway

> Use **`for`** when you know the exact count, **`while`** when you only know the stop condition, and **`do...while`** when the block must run at least once before checking the condition.
