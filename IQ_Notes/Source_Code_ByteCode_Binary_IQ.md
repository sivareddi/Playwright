# Source Code vs Bytecode vs Binary Code

**Example file:** `01_HelloWorld.js`
**Source code line:** `console.log("Hello World !!!");`

---

## Comparison Table

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|---|---|---|---|
| **Definition** | Human-readable code written by programmers in a high-level language. | Intermediate, compact representation that a virtual machine (VM) can interpret or JIT-compile. | Raw instructions (0s and 1s) that the CPU executes directly. |
| **Example** (for `console.log("Hello World !!!")`) | `console.log("Hello World !!!");` | `LdaGlobal "console"`<br/>`Star r0`<br/>`LdaNamedProperty r0, "log"`<br/>`Star r1`<br/>`LdaConstant "Hello World !!!"`<br/>`Star r2`<br/>`CallRuntime r1, r2` | `48 8B 05 4A 3A 00 00`<br/>`48 89 C1`<br/>`48 8B 15 3C 3A 00 00`<br/>`FF 15 30 3A 00 00`<br/>(x86-64 hex representation) |
| **Human readable?** | Yes — written in plain English-like syntax. | Partially — looks similar to assembly but is VM-specific. | No — only readable as assembly mnemonics via a disassembler. |
| **Who generates it?** | The programmer writes it. | A **compiler** (e.g., V8's Ignition) converts source → bytecode. | A **JIT compiler** or **assembler** converts bytecode → machine code. |
| **Where does it run?** | Needs a runtime or compiler to execute. | Runs on a **Virtual Machine** (e.g., V8, JVM, CLR). | Runs directly on the **physical CPU**. |
| **Portability** | Portable — same source runs on any platform with the right runtime. | Portable — bytecode runs anywhere the VM exists (e.g., any OS with Node.js). | **Not portable** — tied to a specific CPU architecture (x86, ARM, etc.). |
| **Speed** | Slowest (must be parsed/compiled first). | Faster than source; slower than native machine code. | **Fastest** — executed directly by hardware. |
| **Optimization level** | None — written for human clarity. | Lightly optimized (e.g., V8's Ignition bytecode). | Heavily optimized (e.g., V8's TurboFan JIT produces highly optimized machine code). |
| **Storage size** | Largest (verbose, includes comments/whitespace). | Medium — more compact than source. | **Smallest** — compact binary instructions. |
| **Security** | Open — anyone can read the full logic. | Harder to read but still reversible with tools. | Very hard to reverse-engineer to original logic. |

---

## How It Works in Practice (Node.js / V8)

```
Source Code                          Bytecode                          Binary Code
"console.log(...)"                   Ignition bytecode                 TurboFan machine code
        │                                    │                                │
        ▼                                    ▼                                ▼
┌─────────────────┐    Parser + Compiler   ┌─────────────────┐    JIT (hot paths)  ┌─────────────────┐
│   HelloWorld.js │ ──────────────────▶   │  V8 Bytecode    │ ──────────────────▶ │  x86-64 Native  │
│ (text file)     │                      │  (in memory)    │                    │  Instructions    │
└─────────────────┘                      └─────────────────┘                    └─────────────────┘
```

1. **Source Code**: You write `console.log("Hello World !!!");` in a `.js` file.
2. **Parsing**: V8 parses the source into an **AST** (Abstract Syntax Tree).
3. **Bytecode Generation**: V8's **Ignition** interpreter emits bytecode — compact VM instructions.
4. **Execution**: Ignition runs the bytecode immediately. If a function runs many times ("hot path"), V8's **TurboFan** JIT compiler kicks in.
5. **Binary Code (JIT)**: TurboFan compiles the hot bytecode into **native machine code** for the specific CPU (x86-64, ARM64, etc.), which runs at full hardware speed.

---

## Key Takeaway

| Code Type | Who Writes It | Who Reads It |
|---|---|---|
| **Source Code** | Programmer | Humans |
| **Bytecode** | Compiler (V8 Ignition) | Virtual Machine (V8) |
| **Binary Code** | JIT Compiler (V8 TurboFan) | CPU Hardware |

> **JavaScript is NOT compiled to a binary file on disk.** Bytecode and machine code live only in memory at runtime. This is different from C/C++ where binary is written to an `.exe` or `.out` file.
