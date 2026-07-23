# IQ Notes — Prompt Template

## How to use

Ask me any concept question like this:

> **"Explain [concept name] with an example from [filename]"**

I will create a `.md` file in this `iq_notes` folder explaining that concept in a structured table format, similar to the `Source_Code_ByteCode_Binary_IQ.md` file.

## Example prompts you can ask

| # | Prompt |
|---|---|
| 1 | "Explain the difference between `let`, `var`, and `const` with an example from `02_let_concept.js`" |
| 2 | "Explain what a closure is with an example" |
| 3 | "Explain the event loop in JavaScript" |
| 4 | "Explain hoisting with an example" |
| 5 | "Explain the difference between `==` and `===`" |

## Output format

Each file will follow this structure:

```
# Concept Name

**Example file:** filename.js  
**Source code:** relevant line

---

## Comparison / Explanation Table

| Aspect | Item 1 | Item 2 | Item 3 |
|---|---|---|---|
| definition | ... | ... | ... |
| example | ... | ... | ... |

---

## Key Takeaway

> A short summary sentence.
```

## Just say "Create IQ note for [topic]"

Or simply ask any question starting with:

- **"Create IQ note for..."**
- **"Explain the difference between..."**
- **"What is the difference between... with a table and save it to iq_notes"**

I'll take care of the rest.
